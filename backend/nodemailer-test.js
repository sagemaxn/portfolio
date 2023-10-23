require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

console.log(process.env.CLIENT_ID)
console.log(process.env.CLIENT_SECRET)
console.log(process.env.REFRESH_TOKEN)
console.log(process.env.EMAIL)
console.log(process.env.REDIRECT_URI)
async function sendTestEmail() {
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        'urn:ietf:wg:oauth:2.0:oob', // This is the redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

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
        debug: true, // show debug output
        logger: true, // log information in console
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL, // for this test, it'll send an email to itself
        subject: 'Nodemailer Test',
        text: 'This is a test email sent using Nodemailer.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

sendTestEmail();
