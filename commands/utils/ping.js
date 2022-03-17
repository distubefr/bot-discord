const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    permissions: ['ADMINISTRATOR'],
    description: 'Commande ping!',
    async run(client, message, args) {
      const tryPong = await message.channel.send("On essaye de pong... un instant!");

      const embed  = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
          { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
          { name: "Latence BOT", value: `\`\`\`${tryPong.createdTimestamp - message.createdTimestamp}ms\`\`\``}
        )
        .setTimestamp()
        .setFooter({ 
          text: message.author.username, 
          iconURL: message.author.displayAvatarURL() });

      tryPong.edit({ content: ' ', embeds: [embed] });
  },
  async runInteraction(client, interaction, args) {
    const tryPong = await interaction.reply( {content: "On essaye de pong... un instant!", fetchReply: true});

    const embed  = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setURL('https://google.com')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
          { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
          { name: "Latence BOT", value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username, 
          iconURL: interaction.user.displayAvatarURL() 
        });


    interaction.editReply({ content:' ', embeds: [embed] });
  }
};