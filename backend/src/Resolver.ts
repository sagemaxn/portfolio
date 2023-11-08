import * as nodemailer from 'nodemailer';
import {
    Arg,
    Field,
    InputType,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from 'type-graphql';

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
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDING_EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SENDING_EMAIL,
            to: process.env.RECEIVING_EMAIL,
            subject: `${name} ${email}`,
            text: `email: ${email}\nmessage: ${message}`,
        };

        try {
            const response = await transporter.sendMail(mailOptions);
            console.log('Message sent:', response);
            return 'Email sent successfully';
        } catch (error) {
            console.error('Error sending email', {
                name,
                email,
                message,
                error,
            });
            return 'Failed to send email';
        }
    }
}
