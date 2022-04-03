const { Client, CommandInteraction, MessageEmbed, MessageActionRow } = require('discord.js')

module.exports = {
    name: "unmute",
    category: "moderation",
    permissions: ["MODERATE_MEMBERS"],
    description: "Démute un utilisateur",
    async run(client, message, args) {
            
    },
    options: [{
        name: 'target',
        description: 'Selectioner l\'utilisateur',
        type: 'USER',
        required:'true'
    }],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
    */ 
     async runInteraction(client, interaction, args) {
        const target = interaction.options.getMember('target');

          if(!target.roles.cache.has('960037282742665276')) return interaction.reply({embeds: [new MessageEmbed().setColor('RED').setDescription('Le membre est pas muté')]})
          
          target.roles.remove('960037282742665276')
    
        interaction.reply({embeds: [new MessageEmbed().setColor('GREEN').setColor('GREEN').setDescription(`${target} a été démute`)]})
      },
}