const { MessageEmbed, BaseCommandInteraction } = require("discord.js");
const { readdirSync } = require("fs");
const commandFolder = readdirSync("./utils");
const prefix = "!";

module.exports = {
  name: "help",
  category: "utils",
  permissions: ["SPEAK"],
  description: "Commande help!",
  async run(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle("Liste des commandes!")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: "Commande Ping",
          value: `Commande Utilisation !\nVous envoie la latence du bot et de l'API. Utilisation : !ping ou /ping`,
        },
        {
          name: "Commande Userinfo",
          value: `Commande Utilisation !\nSavoir les informations du bot ou du membre. Utilisation : Clic gauche sur la personne Applications Userinfo`,
        },
        {
          name: "Commande Emit",
          value: `Commande Administrateur !\nEmmetre un évenement au choix. Utilisation : !emit ou /emit`,
        },
        {
          name: "Commande Poll",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !poll [content] ou /poll [title] [content]`,
        },
        {
          name: "Commande Clear",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !clear [nomber] [@member] ou /clear [nomber] [@member]`,
        },
        {
          name: "Commande Kick",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !kick [@member] [reason] ou /kick [@member] [reason]`,
        },
        {
          name: "Commande Ban",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !ban [@member] [reason] ou /ban [@member] [reason]`,
        }
      )
      .setTimestamp()
      .setFooter({
        text: message.author.username,
        iconURL: message.author.displayAvatarURL(),
      });

    message.channel.send({ embeds: [embed] });
  },
  async runInteraction(client, interaction, args) {
    const embed = new MessageEmbed()
      .setTitle("Liste des commandes!")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: "Commande Ping",
          value: `Commande Utilisation !\nVous envoie la latence du bot et de l'API. Utilisation : !ping ou /ping`,
        },
        {
          name: "Commande Userinfo",
          value: `Commande Utilisation !\nSavoir les informations du bot ou du membre. Utilisation : Clic gauche sur la personne Applications Userinfo`,
        },
        {
          name: "Commande Emit",
          value: `Commande Administrateur !\nEmmetre un évenement au choix. Utilisation : !emit ou /emit`,
        },
        {
          name: "Commande Poll",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !poll [content] ou /poll [title] [content]`,
        },
        {
          name: "Commande Clear",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !clear [nomber] [@member] ou /clear [nomber] [@member]`,
        },
        {
          name: "Commande Kick",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !kick [@member] [reason] ou /kick [@member] [reason]`,
        },
        {
          name: "Commande Ban",
          value: `Commande Modération !\nFaire des sondages au choix. Utilisation : !ban [@member] [reason] ou /ban [@member] [reason]`,
        }
      )
      .setTimestamp()
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      });

    interaction.reply({ embeds: [embed] });
  },
};