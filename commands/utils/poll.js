const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  category: "utils",
  permissions: ["MANAGE_CHANNELS"],
  description: "Poster votre propre sondage!",
  async run(client, message, args) {
    
  },
  options: [
    {
      name: "title",
      description: "Taper le titre de votre sondage",
      type: "STRING",
      required: true,
    },
    {
      name: "content",
      description: "Taper la question de votre sondage",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction, args) {
    const pollTitle = interaction.options.getString("title");
    const pollContent = interaction.options.getString("content");

    const embed = new MessageEmbed()
      .setTitle(pollTitle)
      .setColor("#00a3b5")
      .setDescription(pollContent)
      .setTimestamp()
      .setFooter({
        text: `Nouveau sondage généré par ${interaction.user.tag}`,
      });

    const poll = await interaction.reply({ embeds: [embed], content: '\@Fondateur\t', fetchReply: true });
    poll.react("<:check:953734946344824924>");
    poll.react("<:x_:953735550442016818>");
  },
};
