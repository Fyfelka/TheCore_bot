module.exports = (client, msg) => {
	if (msg.content === '!ping') {
    msg.reply('Pong!')
	}
}