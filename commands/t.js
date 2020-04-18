module.exports = {
	name: 't',
	description: 'makes you tood',
	execute(message, args) {
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} toods`);
	},
};