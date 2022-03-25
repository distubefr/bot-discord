const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'guildMemberRemove' ,
    once: false,
    async execute(client, member) {
        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.avatarURL() })
            .setColor('#dc143c')
            .setDescription(`Au revoir ${member}
            Crée le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>
            Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>
            Quitté le: <t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a quitté!'});

        const logChannel = client.channels.cache.get('932007171321888828');
        const logsChannel = client.channels.cache.get('927083139367596042');
        logChannel.send({ embeds: [embed] });
        logsChannel.send({ embeds: [embed] });
    },
};
