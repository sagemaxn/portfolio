import { config } from 'dotenv';
import * as process from 'process';
config()
const { OAuth2Client } = require('google-auth-library');

const REDIRECT_URL = 'urn:ietf:wg:oauth:2.0:oob';
console.log(process.env.CLIENT_ID)
console.log(process.env.CLIENT_SECRET)
const oauth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    REDIRECT_URL,
);

async function getRefreshToken() {
    const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/gmail.send',
        prompt: 'consent',
    });

    console.log(`Please visit the following URL and authorize the app:\n${authorizeUrl}\n`);

    const code = await new Promise((resolve) => {
        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

        rl.question('Enter the code from the authorization page: ', (code) => {
            rl.close();
            resolve(code);
        });
    });

    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
        console.error('Did not receive a refresh token. Make sure the user granted the required permissions and try again.');
        return;
    }

    console.log(`Your refresh token is:\n${tokens.refresh_token}`);
}

getRefreshToken().catch(console.error);
