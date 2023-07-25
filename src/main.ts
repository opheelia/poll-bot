import { Client } from "discord.js";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

const token: string | undefined = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log("Bot is ready");
 });

client.login(token).then(res => console.log(res));