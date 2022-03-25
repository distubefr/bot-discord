module.exports = {
    name: "kick",
    category: "moderation",
    permissions: ["KICK_MEMBERS"],
    description: "Kick un utilisateur avec raison",
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à kick');
        if (!args[0]) return message.reply('Spécifier une raison à votre kick')

        const target = message.mentions.members.fing(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.kickable) return message.reply('Ce membre ne peux être kick pas le bot!');

        target.kick(reason);
        message.channel.send(`Le membre ${target} a été kick!`);
    },
    options: [
      {
        name: "target",
        description: "Lu'tilisateur à kick",
        type: "USER",
        required: true,
      },
      {
        name: "raison",
        description: "La raison du kick",
        type: "STRING",
        required: true,
      },
    ],
    async runInteraction(client, interaction, args) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getMember('reason');

        if (!target.kickable) return message.reply('Ce membre ne peux être kick pas le bot!');

        target.kick(reason);
        interaction.reply(`Le membre ${target} a été kick!`);
    },
  };
  