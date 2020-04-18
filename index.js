const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

var mysql = require('mysql');

//json quote


//var data = {}
//data.table = []
//for (i=0; i <26 ; i++){
//   var obj = {
//       id: i,
//       square: i * i
//   }
//   data.table.push(obj)
//}
//fs.writeFile ("input.json", JSON.stringify(data), function(err) {
//    if (err) throw err;
//    console.log('complete');
//    }
//);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	//user bannnnnnnn
//	if (message.author.id !== '695006551571824660') {
//	} else {return message.channel.send("You can't speak zcj")
//	message.delete({ timeout: 1, reason: 'It had to be done.' })};

//	if (message.author.id !== '168781395219447809') {
//	} else {return message.channel.send("You can't speak zhara")
//	message.delete({ timeout: 1, reason: 'It had to be done.' })};

168781395219447809

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//user bannnnnnnn
//	if (message.author.id !== '695006551571824660') {
//	} else {return message.channel.send("You can't use commands zcj")
//	message.delete({ timeout: 1, reason: 'It had to be done.' })};


		if (command === '**poots**') {
		message.channel.send(`\* ${message.author} poots`);
		message.delete({ timeout: 1, reason: 'It had to be done.' });
		} else if (command === '/me') {
			let argsresult;
			let mChannel = message.mentions.channels.first()

			message.delete()
			if(mChannel) {
				argsresult = args.slice(1).join(" ")
				mChannel.send(argsresult)
			} else {
				argsresult = args.join(" ")
			message.channel.send(`\* ${message.author} ${argsresult}`)
			}
			}
		if (command === 'quotereadsendtest') {
		message.channel.send(`${rawdata}`);
		} else if (command === 'quoteaddtest') {

			let argsresult;
			let mChannel = message.mentions.channels.first()

			message.delete()
			if(mChannel) {
				argsresult = args.slice(1).join(" ")
				mChannel.send(argsresult)
			} else {
				argsresult = args.join("{ }")
				let data = `${argsresult}`
				message.channel.send(`\* ${message.author} ${data}`)
//				fs.writeFile('Quotes.json', data, function(err, result) {
     if(err) console.log('error', err);
   };
			
		}

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);