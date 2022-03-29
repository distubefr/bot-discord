module.exports = {
  name: "mute",
  category: "moderation",
  permissions: ["MODERATE_MEMBERS"],
  description: "Mute un utilisateur temporairement avec raison",
  async run(client, message, args) {
    if (!args[0]) return message.reply("Spécifier un membre à mute");
    if (args[1] || !args[1])
      return message.reply(
        "Spécifier une durée pour votre ban **(entre 1 et 7 jours)**"
      );
    if (!args[2]) return message.reply("Spécifier une raison à votre ban");

    const target = message.mentions.members.find((m) => m.id);
    const duration = args[1];
    const reason = args.slice(2).join(" ");

    if (!target.bannable)
      return message.reply("Ce membre ne peux être ban pas le bot!");

    target.ban({ days: duration, reason: reason });
    message.channel.send(
      `Le membre ${target} a été banni pour ${duration} jours!`
    );
  },
  options: [
    {
      name: "target",
      description: "L'utilisateur à ban",
      type: "USER",
      required: true,
    },
    {
      name: "duration",
      description: "La durée du ban",
      type: "NUMBEF",
      required: true,
    },
    {
      name: "reason",
      description: "La raison du ban",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction, args) {
    const target = interaction.options.getMember("target");
    const duration = interaction.options.getMember("duration");
    const reason = interaction.options.getMember("reason");

    if (!target.bannable)
      return message.reply("Ce membre ne peux être ban pas le bot!");

    target.ban({ days: duration, reason: reason });
    interaction.reply(
      `Le membre ${target} a été banni pour ${duration} jours!`
    );
  },
};
