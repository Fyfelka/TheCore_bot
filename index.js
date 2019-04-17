const Discord = require('discord.js')
const client = new Discord.Client()

const fs = require('fs')

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const message = require('./events/message.js')
    const name = file.split('.')[0]
    client.on(name, arg => message(client, arg))
  })
})

client.on('ready', () => {
    client.user.setActivity("Rick&Morti", {type: "WATCHING"})
})

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'start');
	channel.send('Welcome to TheCore discord server! You can find all documentation and FAQ here - https://drive.google.com/drive/folders/1ui2HNwaUa4FkHzRwATgXHNVEpolLNOzA. Please, do enjoy your stay, ' + "<@" + member.id + ">")
})

client.login(process.env.BOT_TOKEN)