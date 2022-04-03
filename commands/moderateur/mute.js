const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const ms = require("ms");

module.exports = {
  name: "mute",
  category: "moderation",
  permissions: ["MODERATE_MEMBERS"],
  description: "Mute un utilisateur temporairement avec raison",
  async run(client, message, args) {
   
  },
  options: [
    {
      name: "target",
      description: "L'utilisateur à mute",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "La raison du mute",
      type: "STRING",
      required: true,
    },
    {
      name: 'preset-time',
      description: 'Choisir la durée du mute pré défini',
      type: 'STRING',
      required: false,
      choices: [
        {
          name: '1 Heure',
          value: '1h'
        },
        {
          name: '1 Day',
          value: '1d'
        },
        {
          name: '5 Secondes',
          value: '5s'
        },
      ]
    },
    {
      name: 'custom-time',
      description: 'choisir la durée du mute',
      type: 'STRING',
      required: false
    }
  ],
  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */
  async runInteraction(client, interaction, args) {
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');
    const time = interaction.options.getString('preset-time') || interaction.options.getString('custom-time') ||'14d'

    if(!interaction.guild.roles.cache.get('960037282742665276'))
    return interaction.reply({ embeds: [new MessageEmbed().setColor('RED').setDescription('Le role mute n\'existe pas')]})
    
    await target.roles.add('960037282742665276')
    setTimeout(async () => {
      if(!target.roles.cache.has('960037282742665276')) return;
      await target.roles.remove('960037282742665276')
    }, (ms(time)))

    interaction.reply({embeds: [new MessageEmbed().setColor('GREEN').setColor('GREEN').setDescription(`${target} a été muté pour ${time} car ${reason}`)]})
  },
};
