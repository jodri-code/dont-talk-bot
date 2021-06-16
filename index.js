const discord = require('discord.js');
require('discord-reply');

const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.once('ready', async () => {
    console.log("yo, I'm online bro");
});


// bot.on('message', (message) => {
bot.on('message', (message) => {
    if (message.author.bot) return;
    const bot_channel = message.guild.channels.cache.find(chan => chan.name == "dont-talk");
    const channel = message.channel;
    if (channel.id != bot_channel.id) {
     message.lineReply('bot nono setup - use motomotostarsgame to set up. bot nono correct channel - use dont-talk');
    } else{
     message.delete({ timeout: 111 });
     message.guild.channels.cache.find(i => i.name === 'dont-talk').send(message.author.username + ': ' + message.content);
    }
    if(message.content.startsWith('shutup')){
        message.delete({ timeout: 1000 });
        message.guild.channels.cache.find(i => i.name === 'dont-talk').send('no, u ' + message.content);
    } else if(message.content.startsWith('motomotostarsgame')){
        message.delete({ timeout: 1000 });
        const name = 'dont-talk';
        if(message.guild.channels.cache.find(chnl => chnl.name === 'dont-talk')) {
            message.guild.channels.cache.find(i => i.name === 'dont-talk').send(message.content);
        } else{
            message.guild.channels.create(name)
        }
    }
})


bot.login(process.env.token);
