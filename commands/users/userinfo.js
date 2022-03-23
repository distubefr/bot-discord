const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category: 'users',
    permissions: ['SPEAK'],
    type: 'USER',
    async runInteraction(client, interaction, args) {
    const member = await interaction.guild.members.fetch(interaction.targetId); 
    
    const embed = new MessageEmbed()
        .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://emojiterra.com/fr/garcon-peau-2/' : 'https://emojiterra.com/fr/visage-de-robot/' })
        .setColor('#8e48f7')
        .setImage(member.user.displayAvatarURL())
        .addFields(
            { name: 'Nom', value: `${member.displayName}`, inline: true },
            { name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
            { name: 'Bot', value: `${member.user.bot  ? '🟢' : '🔴'}`, inline: true },
            { name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ')}`, inline: true },
            { name: 'A crée son compte le', value: ` <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>`,},
            { name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>`,},
        )

    interaction.reply({ embeds: [embed], ephemeral:true},);
  }
};