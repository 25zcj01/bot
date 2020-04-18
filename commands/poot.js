module.exports = {
	name: 'poot',
	description: 'makes you fail at pooting',
	execute(message, args) {
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} tried to poot, but failed`);
	},
};