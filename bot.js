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
            console.log('Found user:', user.user.username);
            console.log('Bot can moderate this user:', user.moderatable);
            console.log('User current timeout:', user.communicationDisabledUntil);
            
            user.timeout(60000, 'I HATE YOU').then(() => {
                console.log('Successfully timed out user');
                
                setTimeout(() => {
                    user.timeout(null).then(() => {
                        console.log('Removed timeout after 1 second');
                    }).catch(error => {
                        console.log('Error removing timeout:', error.message);
                    });
                }, 1000);
            }).catch(error => {
                console.log('Error timing out user:', error.message);
            });
        }).catch(error => {
            console.log('Error fetching user:', error.message);
        });
    }
});

bot.login(process.env.DISCORD_TOKEN);
