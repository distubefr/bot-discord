const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose')
const client = new Client({intents: 515 });

client.commands = new Collection();

['CommandUtil', 'EventUtil'].forEach(handler => {  require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => { console.log(`Le processus s'est arrêter avec le code: ${code}!`)});
process.on('uncaughtException', (err, origin) => console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origine: ${origin}`));
process.on('unhandledRejection', (reason, promise) => { console.log(`UNHANDLEDREJECTION: ${reason}\n-----\n`, promise) });
process.on('warning', (...args) => console.log(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4
}).then(() => {
    console.log('Le client est connecté à la base de données!');
}).catch(err => {
    console.log(err);
});

client.login(process.env.DISCORD_TOKEN)