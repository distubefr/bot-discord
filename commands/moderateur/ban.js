module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    description: "Banir un utilisateur avec raison",
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à ban');
        if (!args[0]) return message.reply('Spécifier une raison à votre ban')

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.bannable) return message.reply('Ce membre ne peux être ban pas le bot!');

        target.ban({ reason });
        message.channel.send(`Le membre ${target} a été banni!`);
    },
    options: [
      {
        name: "target",
        description: "Lu'tilisateur à ban",
        type: "USER",
        required: true,
      },
      {
        name: "raison",
        description: "La raison du ban",
        type: "STRING",
        required: true,
      },
    ],
    async runInteraction(client, interaction, args) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getMember('reason');

        if (!target.bannable) return message.reply('Ce membre ne peux être ban pas le bot!');

        target.ban(reason);
        interaction.reply(`Le membre ${target} a été kick!`);
    },
  };
  