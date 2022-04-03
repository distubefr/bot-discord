const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Bannir des membres',
    category: 'moderation',
    permissions: ["BAN_MEMBERS"],
    async run(client, message, args) {
    
    },
    options: [
        {
            name: 'target',
            description: 'Selectionner un membre à ban',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'Choisir un raison du ban',
            type: 'STRING',
            required: true,
        },
        {
            name: 'messages',
            description: 'Supprimer les messages de l\'utisateur',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'Ne supprimez aucun',
                    value: 0,
                },
                {
                    name: '7 jours précédents',
                    value: 7,
                },
            ]
        },
    ],
    async runInteraction(client, interaction, args) {
        const target = interaction.options.getMember("target");

        if (target.id === interaction.member.id)
        return interaction.reply({embeds: [new MessageEmbed().setColor('RED').setDescription(`Vous ne pouvez pas vous interdire`)]})

        if (target.permissions.has('ADMINISTRATOR'))
        return interaction.reply({embeds: [new MessageEmbed().setColor('RED').setDescription(`Vous ne pouvez pas bannir un administrateur`)]})

        const reason = interaction.options.getString('reason');

        if(reason.length > 512)
        return interaction.reply({ embeds: [new MessageEmbed().setColor('RED').setDescription(`La raison ne peux pas dépasser 512 caractères.`)]})

        const amount = interaction.options.getString('messages')

        target.ban({ days: amount, reason: reason})

        interaction.reply({ embeds: [new MessageEmbed().setColor('GREEN').setDescription(`${target.user.username} a été banni`)]})
      },
}