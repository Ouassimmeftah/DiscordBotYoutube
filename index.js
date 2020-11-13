const fs = require(`fs`);

const Discord = require('discord.js');

const { prefix,token} = require('./config.json');

const client = new Discord.Client() ;

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));


for(const file of commandfiles ){
    const commands = require(`./commands/${file}`);
    client.commands.set(commands.name, commands);
}


client.once('ready', () => {
    console.log('ready !');
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(` `);
    const commands = args.shift().toLowerCase();

    if(!client.commands.has(commands)) return;

    try{
        client.commands.get(commands).execute(message,args);
    } catch(error){
        console.error(error);
        message.reply("une erreur s'est produite pendant l'execution de la commande");
    }

})


client.login(token);
