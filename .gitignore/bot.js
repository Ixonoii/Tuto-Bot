// CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-"

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity("-help | mBot", {type: "PLAYING"})
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "message"){
        let memberMEN = args.slice(2).join(" ")
        let question = args.slice(3).join(" ")
        if(!memberMEN) return message.channel.send("***Vous devez mentionner l'ID d'un channel.***")
        if(!question) return message.channel.send("***Vous devez entrer un message.***") 
        client.channels.get(memberMEN).send(question);
    message.channel.send("***Message envoyé.***")
}
})
