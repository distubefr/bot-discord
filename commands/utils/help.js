const { MessageEmbed, BaseCommandInteraction } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./utils');
const prefix = "!";

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SPEAK'],
    // description: 'Commande help!',
    async run(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('Liste des commandes!')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Commande Ping', value: `Commande Utilisateur !\nVous envoie la latence du bot et de l'API. Utilisation : !ping ou /ping`},
                { name: "Commande Userinfo", value: `Commande Utilisateur !\nSavoir les informations du bot ou du membre. Utilisation : Clic gauche sur la personne Applications Userinfo`},
                { name: "Commande Emit", value: `Commande Administrateur !\nEmmetre un évenement au choix. Utilisation : !emit ou /emit`},
                { name: "Commande Poll", value: `Commande Modérateur !\nFaire des sondages au choix. Utilisation : !poll ou /poll`},
            )
            .setTimestamp()
            .setFooter({ 
                text: message.author.username, 
                iconURL: message.author.displayAvatarURL() 
            });
            
            message.channel.send({ embeds: [embed] });       
    },
  async runInteraction(client, interaction, args) {
    
  }
};