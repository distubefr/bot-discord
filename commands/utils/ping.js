const prefix = "!";
module.exports = {
    name: 'ping',
    run: (client, message, args) => {
              message.channel.send(`🏓La latence de message est de ${Date.now() - message.createdTimestamp}ms. L'API discord à une latence de ${Math.round(client.ws.ping)}ms`)
  }
}