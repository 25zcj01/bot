module.exports = {
	name: 'ban',
	description: 'bans people duh',
	execute(message, args) {
		if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You can't use this")
		if (!args[0])message.reply('You need to specify a user!');
		
		const user = message.mentions.users.first();
		
		if(user){
			const member = message.guild.member(user);
			if(member){
				member.ban('You were baned because i said so').then(() =>{
				 message.channel.send(`\* ${message.author} was sucessfully banned we dont have to worry about them anymore`);
				}).catch(err =>{
					message.channel.send(`\* ${message.author}i could not ban ${user.tag}. i am forever in your debt`);
					console.log(err);
				});
			} else{
				message.reply('what u tryn to do remove the non existant like bruh look at this guy bein a failure and shit')
				
			}
		} else {
			message.reply('OMG they are not in this server do you know how to read a member list or are you just stupid');
		}
	},
};