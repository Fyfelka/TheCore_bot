const Discord = require('discord.js')
const client = new Discord.Client()


client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!')
  }
  if (msg.content === '!faq') {
	  msg.reply('FAQ located here - https://docs.google.com/document/d/1QM1Acz96rtFeCz_UC_-gShbxA9Nrcpl-l1nJsulAz1w/. Read it, before asking questions.')
  }
  if (msg.content === '!sheet') {
	  msg.reply('TheCore Spreadsheet - https://docs.google.com/spreadsheets/d/1zN7ufgH79t6uaCXorX6cs3mWfkMKFC_6VTtZ7vH_9-s/. And remember - multiple tabs on the bottom. Enjoy!')
  }
  if (msg.content === '!thecourse') {
	  msg.reply('Learn TheCore efficiently - https://docs.google.com/spreadsheets/d/1LhbxeYdkukOzYw030qNYQgLI1p3WUAbSTiuy1emeJSc/.')
  }
  if (msg.content === '!thecourse') {
	  msg.reply('Insight on the TheCore ideas - https://docs.google.com/document/d/1reGIGIJ4W_MtfyoWjc2TJUeexswA4Jemy23jx0CSsKA/')
  }
  if (msg.content === '!tilt') {
	  const locFile = new Discord.Attachment('./tilt.jpg')
	  msg.channel.send(locFile)
  }
})

client.login(process.env.BOT_TOKEN)