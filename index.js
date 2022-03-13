const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const client = new Client({intents: 513 });

client.commands = new Collection();

['CommandUtil', 'EventUtil'].forEach(handler => {  require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => { console.log(`Le processus s'est arrêter avec le code: ${code}!`)});
process.on('uncaughtException', (err, origin) => console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origine: ${origin}`));
process.on('unhandledRejection', (reason, promise) => { console.log(`UNHANDLEDREJECTION: ${reason}\n-----\n`, promise) });
process.on('warning', (...args) => console.log(...args));

client.login(process.env.DISCORD_TOKEN)