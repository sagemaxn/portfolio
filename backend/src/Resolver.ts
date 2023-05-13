import {Arg, Field, InputType, Mutation, ObjectType, Query, Resolver,} from 'type-graphql';

import nodemailer from 'nodemailer';

import {google} from 'googleapis';

const OAuth2 = google.auth.OAuth2;
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
        return 'f';
    }

    @Mutation(() => String)
    async contactMessage(
        @Arg('messageInput') { name, email, message }: MessageInput,
    ) {
        if (!name) {
            name = '';
        }
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `${name} ${email}`,
            text: message,
        };

        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            'https://developers.google.com/oauthplayground',
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });
        const accessToken = oauth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'sagemaxn@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        transporter.sendMail(mailOptions, function (error, info) {
            error ? console.log(error) : console.log(info.response);
            transporter.close();
        });

        return 's';
    }
}
