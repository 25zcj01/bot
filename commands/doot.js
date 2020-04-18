module.exports = {
	name: 'doot',
	description: 'makes you doot',
	execute(message, args) {
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} doots`);
	},
};