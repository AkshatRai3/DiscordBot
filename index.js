const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})



client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const redirectURL = message.content.split(" ")[1];
        return message.reply({
            content: 'Generating short url for ' + redirectURL
        })
    }
    message.reply({content:'Hi from bot'})
})

client.on('interactionCreate', (interacrion) =>{
    console.log(interacrion)
    interacrion.reply('PONG!!')
})

client.login("MTM4NTE4MzE5ODUxMzcyNTQ3MA.GHrdcj.L-DbIgICUs3d3auMfy77lMon1YFxfPGH69jZRA")