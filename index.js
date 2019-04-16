const Discord = require('discord.js')
const client = new Discord.Client()


client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!')
  }
  if (msg.content === '!faq') {
	  msg.reply('faq')
  }
})

client.login(process.env.BOT_TOKEN)