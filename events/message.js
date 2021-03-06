const Discord = require('discord.js')

module.exports = (client, msg) => {
	
	var fyfelka = process.env.ME;
	
	/*function processCommand(receivedMessage) {
		let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
		let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
		let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
		let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
		return [primaryCommand, arguments]
	}*/
	
	if (msg.content === ('!rick')) {
		if (msg.member.id === fyfelka) {
			client.user.setActivity("Rick&Morti", {type: "WATCHING"})
		}
	}
	if (msg.content === ('!clapton')) {
		if (msg.member.id === fyfelka) {
			client.user.setActivity("Eric Clapton", {type: "LISTENING"})
		}
	}
	if (msg.content === '!goodboy') {
		if (msg.member.id === fyfelka) {
			const boy = new Discord.Attachment('./images/good_boy.gif')
			msg.channel.send(boy)
		} else {
			msg.reply('I am not your boy')
		}
	}
	if (msg.content === '!ping') {
		msg.reply('Pong!')
	}
	if (msg.content === '!intro') {
		msg.reply('Hello, my name is TheCore_bot, and I pass butter. For more information please refer to #bot-commands')
	}
	if (msg.content === '!faq') {
		msg.reply('FAQ located here - https://docs.google.com/document/d/1QM1Acz96rtFeCz_UC_-gShbxA9Nrcpl-l1nJsulAz1w/. Read it, before asking questions.')
	}
	if (msg.content === '!banished') {
		msg.reply('Functions which set to Ctrl+Shift+Alt+key called banished.  Functions are banished when they are considered to form bad habits by default or if they’re considered unimportant/useless. Check out FAQ for more information here - https://docs.google.com/document/d/1QM1Acz96rtFeCz_UC_-gShbxA9Nrcpl-l1nJsulAz1w/.')
	}
	if (msg.content === '!rally') {
		msg.reply('The “different camera” is a rally camera or  “unlocked” camera. \n Setting a base camera automatically centers on selection, an undesirable feature for a camera you want to focus on what is often a terrain feature without any units or buildings yet.  So, the rally camera uses a different set of modifiers to set. Action sequence: \n 1. Ctrl+Camera - jumps to location \n 2. Ctrl+LClick - selects unit type \n 3. Ctrl+CG - add/steals to CG. \n Check out FAQ for more information here - https://docs.google.com/document/d/1QM1Acz96rtFeCz_UC_-gShbxA9Nrcpl-l1nJsulAz1w/.')
	}
	if (msg.content === '!inject') {
		msg.reply('The primary inject method for TheCore is camera locations inject. Box inject ot putting inject queens in a CG is up to your personal taste. You can find more information in inject video made by Lambo - https://www.youtube.com/watch?v=V3csGEzHj2k.')
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
	if (msg.content === '!plussetup') {
		msg.reply('Looking how to setup TheCore+? Look here - https://docs.google.com/document/d/1aKCnVl90qck6HbSLQD3jw11bleuVBqtLpYSUb4rsvtI/.')
	}
	if (msg.content === '!versions') {
		msg.reply('\n TheCoreLite, TheCore, TheCorePlus. \n Easy, Medium, Hard. \n Normal, Less Normal, Least Normal. \n Effecient, More Efficient, Most Efficient.')
	}
	if (msg.content === '!maps') {
		msg.reply('List of all needed maps, with server-specific links availible in the pinned messages in #map-lab')
	}
	if (msg.content === '!tilt') {
		const tilt = new Discord.Attachment('./images/tilt.jpg')
		msg.reply('Most of the time tilting the keyboard will result in more comfortable experience. See image below, thank you Edennill!')
		msg.channel.send(tilt)
	}
	if (msg.content === '!fingers') {
		const map_l = new Discord.Attachment('./images/finger_map_L.png')
		const map_r = new Discord.Attachment('./images/finger_map_R.png')
		msg.channel.send(map_l)
		msg.channel.send(map_r)
	}
	if (msg.content === '!download') {
		msg.reply('Download instructions: \n TheCore and TheCorePlus \n 1. Go here - https://drive.google.com/drive/folders/1sTddThP7q05L6RQBUZW2d51DSAztqOyg. \n 2. Pick your keyboard layout. \n 3. If you use mouse with right hand - choose right version, and vice versa. \n 4. If you have the ability to change the locations of Ctrl, Shift and Alt - pick the Plus version. \n TheCoreLite \n 1. Go here - https://github.com/bobo38/TheCoreLite/. \n 2. Click green button:"Clone or download".')
	}
}