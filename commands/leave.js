module.exports = {
	name: 'leave',
	description: 'leaves the server',
	execute(message, args) {
        message.guild.leave();
	},
};