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
  if (msg.content === '!handbook') {
	  msg.reply('Insight on the TheCore ideas - https://docs.google.com/document/d/1reGIGIJ4W_MtfyoWjc2TJUeexswA4Jemy23jx0CSsKA/')
  }
  if (msg.content === '!tilt') {
	  const tilt = new Discord.Attachment('./tilt.jpg')
	  msg.reply('Most of the time tilting the keyboard will result in more comfortable experience. See image below, thank you Edennill!')
	  msg.channel.send(tilt)
  }
  if (msg.content === '!fingers') {
	  const map_l = new Discord.Attachment('./finger_map_L.png')
	  const map_r = new Discord.Attachment('./finger_map_R.png')
	  msg.channel.send(map_l)
	  msg.channel.send(map_r)
  }
  if (msg.content === '!plussetup') {
	  msg.reply('Looking how to setup TheCore+? Look here - https://docs.google.com/document/d/1aKCnVl90qck6HbSLQD3jw11bleuVBqtLpYSUb4rsvtI/.')
  }
  if (msg.contet === '!versions') {
	  msg.reply('TheCoreLite, TheCore, TheCorePlus \n Easy, Medium, Hard \n Normal, Less Normal, Least Normal \n Effecient, More Efficient, Most Efficient.')
  }
})

client.login(process.env.BOT_TOKEN)