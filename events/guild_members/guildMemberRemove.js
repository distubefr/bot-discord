const { MessageEmbed, Formatters } = require('discord.js');
const dayjs = require('dayjs')

module.exports = {
    name: 'guildMemberRemove' ,
    once: false,
    async execute(client, member) {
        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const leftTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeLeftTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.avatarURL() })
            .setColor('#dc143c')
            .setDescription(`Nom d'utilisateur: ${member}
            Crée le: ${creationTimestamp} (${relativeCreationTimestamp})
            Rejoint le: ${joinTimestamp} (${relativeJoinTimestamp})
            Quitté le: ${leftTimestamp} (${relativeLeftTimestamp})
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a rejoint!'});

        const logChannel = client.channels.cache.get('932007171321888828');
        logChannel.send({ embeds: [embed] });
    },
};
