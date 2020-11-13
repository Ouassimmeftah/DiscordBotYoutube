module.exports = {
    name : 'ping',
    description : 'test commande',
    execute(message) {
        message.channel.send(' pong ');
    }
}