module.exports = {
    name: 'ping',
    description: 'Commande ping!',
    run: (client, message, args) => {
              message.channel.send(`🏓La latence de message est de ${Date.now() - message.createdTimestamp}ms. L'API discord à une latence de ${Math.round(client.ws.ping)}ms`)
  },
  runSlash: (client, interaction, args) => {
    interaction.reply(`🏓La latence de message est de ${Date.now() - interaction.createdTimestamp}ms. L'API discord à une latence de ${Math.round(client.ws.ping)}ms`);
  }
};