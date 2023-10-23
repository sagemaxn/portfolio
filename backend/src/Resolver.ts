import { google } from 'googleapis';
import {
    Arg,
    Field,
    InputType,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from 'type-graphql';

const { gmail } = google;

@ObjectType()
export class Message {
    @Field(() => String)
    public name: string;

    @Field(() => String)
    public email: string;

    @Field(() => String)
    public message: string;
}

@InputType()
export class MessageInput {
    @Field(() => String)
    name: string;
    @Field(() => String)
    email: string;
    @Field(() => String)
    message: string;
}

@Resolver()
export class ContactResolver {
    @Query(() => String)
    async test() {
        return 'the server is running';
    }

    @Mutation(() => String)
    async contactMessage(
        @Arg('messageInput') { name, email, message }: MessageInput,
    ) {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URI,
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const gmailClient = gmail({ version: 'v1', auth: oauth2Client });
        //due to low traffic I will simply have my own email send a message to itself with the information
        const rawEmail = Buffer.from(
            `Subject: ${name} ${email}\r\n` +
                `To: ${process.env.EMAIL}\r\n` +
                `From: ${process.env.EMAIL}\r\n\r\n` +
                `email: ${email} \n
                message: ${message}`,
        )
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');

        try {
            const response = await gmailClient.users.messages.send({
                userId: 'me',
                requestBody: {
                    raw: rawEmail,
                },
            });
            console.log('Message sent:', response.data);
            return 'Email sent successfully';
        } catch (error) {
            //a log to hopefully still track some intended info in case of bug
            console.error('Error sending email', {
                name: name,
                email: email,
                message: message,
                error: error,
            });
            return 'Failed to send email';
        }
    }
}
