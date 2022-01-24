import { Resolver, Query, Mutation, Arg, Ctx, InputType, Field, ObjectType } from "type-graphql";

@ObjectType()
export class Message {
  @Field(() => String)
  public name: string;

  @Field(() => String)
  public email: string;

  @Field(() => String)
  public message: string
}

@InputType()
export class MessageInput {
    @Field(() => String)
    name: string
    @Field(() => String)
    email: string
    @Field(() => String)
    message: string
}

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN
}
});

@Resolver()
export class ContactResolver {

  @Query(() => String)
  async test(){
    const b = 'f'
    return b
  }

  @Mutation(() => String)
  async contactMessage(
    @Arg('messageInput') { name, email, message } : MessageInput
  ){
    var mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${name} ${email}`,
      text: message
    };

    console.log( process.env.CLIENT_ID)
    console.log(process.env.CLIENT_SECRET)
    console.log(process.env.REFRESH_TOKEN)
    console.log(process.env.ACCESS_TOKEN)
  //  )

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return 's'

  }

}
