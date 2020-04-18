const Discord = require('discord.js');
module.exports = {
	name: 'motd',
	description: 'its the truth brutha',
	execute(message, args) {
message.channel.send('```/etc/motd:\n  Note: IHAVEROOT has had ROOT here as of the beginning of time\n  >   Just passing through            _____                    __ ____                  __\n  >   /  _// /_   ____ _ _   __ ___  / ___/ ____ ___   ____   / // __ \\  ____   ____   / /_\n  >   / / / __ \\ / __ `/| | / // _ \\ \\__ \\ / __ `__ \\ / __ \\ / // /_/ / / __ \\ / __ \\ / __/\n  > _/ / / / / // /_/ / | |/ //  __/___/ // / / / / // /_/ // // _, _/ / /_/ // /_/ // /_\n  >/___//_/ /_/ \\__,_/  |___/ \\___//____//_/ /_/ /_/ \\____//_//_/ |_|  \\____/ \\____/ \\__/```')
}};