const { DiscordAPIError, MessageCollector } = require("discord.js");
const {prefixeLienYoutube1,prefixeLienYoutube2} = require(`./config.json`);

module.exports = {
    name : 'ajoute',
    description : 'ajoute le lien yt a la playlist yt',
    execute(message) {
        let channel = message.channel;
        if(channel.name === `partage_de_sons`)
          if( message.content.startswith(prefixeLienYoutube1) || message.content.startswith(prefixeLienYoutube2))
            events = message.collect();
            MessageCollector.handleCollect(events);

            if(events === message.end() )
                message.channel.send("La musique a été ajoutée a la playlist youtube de campus en musique !"); 
    }
}