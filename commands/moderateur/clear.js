module.exports = {
  name: "clear",
  category: "moderation",
  permissions: ["MANAGE_MESSAGES"],
  description: "Emettre un événement au choix!",
  async run(client, message, args) {
    
  },
  options: [
    {
      name: "message",
      description: "Le nombre de message à supprimer",
      type: "NUMBER",
      required: true,
    },
    {
      name: "target",
      description: "Sélectionner l'utilisateur pour lav suppression de message",
      type: "USER",
      required: false,
    },
  ],
  async runInteraction(client, interaction, args) {
    const amountToDelete = interaction.options.getNumber("message");
    if (amountToDelete > 100 || amountToDelete < 2)
      return interaction.reply(
        "Le NOMBRE doit être inférieur à 100 et supérieur à 1"
      );
    const target = interaction.options.getMember("target");

    const messagesToDelete = await interaction.channel.messages.fetch();

    if (target) {
      let i = 0;
      const filteredTargetMessages = [];
      (await messagesToDelete).filter((msg) => {
        if (msg.author.id == target.id && amountToDelete > i) {
          filteredTargetMessages.push(msg);
          i++;
        }
      });

      await interaction.channel.bulkDelete(filteredTargetMessages, true);
    } else {
      await interaction.channel.bulkDelete(amountToDelete, true);
    }
  },
};
