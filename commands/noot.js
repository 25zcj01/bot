module.exports = {
	name: 'noot',
	description: 'makes you noot',
	execute(message, args) {
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} noots`);
	},
};