const discord = require('discord.js');
require('dotenv').config();

const bot = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent,
        discord.GatewayIntentBits.GuildMembers
    ]
});

bot.on('messageCreate', message => {
    if (message.content == '?sakura') {
        var userid = '992899878730616973';
        
        message.guild.members.fetch(userid).then(user => {
            user.timeout(60000, 'I HATE YOU');
            console.log('timed out user for 60 seconds');
        });
    }
});

bot.login(process.env.DISCORD_TOKEN);
