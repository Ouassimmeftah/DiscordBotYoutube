module.exports = {
    name : 'server',
    description : 'infos server',
    execute(message) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
}