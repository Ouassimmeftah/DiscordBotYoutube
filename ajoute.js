const { DiscordAPIError, MessageCollector } = require("discord.js");

module.exports = {
    name : 'ajoute',
    description : 'ajoute le lien yt a la playlist yt',
    execute(message) {
        if(channel.name === `partage_de_sons`)
            events = message.collect();
            MessageCollector.handleCollect(events);

            if(events === message.end())
                message.channel.send("La musique a été ajoutée a la playlist youtube de campus en musique !"); 
    }
}