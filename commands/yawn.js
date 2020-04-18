module.exports = {
	name: 'yawn',
	description: 'makes you yawn',
	execute(message, args) {
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} yawns`);
	},
};