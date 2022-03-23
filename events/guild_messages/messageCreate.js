const prefix = '!';

module.exports = {
    name: 'messageCreate' ,
    permissions: 'ADMINISTRATOR',
    once: false,
    execute(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous avez pas la/les permission(s)requise(s)(\`${cmd.permissions.join(', ')}\`) pour taper cette commande!`);
        
        if (cmd) cmd.run(client, message, args);
    }
} 