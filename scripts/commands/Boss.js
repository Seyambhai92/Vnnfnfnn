const fs = require("fs");
module.exports = {
	config:{
	name: "tanvir",
	version: "1.0.1",
	premium: false,	
        prefix: true,
	permssion: 0,
	credits: "Tanvir", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
				cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	const content = event.body ? event.body : '';
	const body = content.toLowerCase();
	const axios = require('axios')
	const NAYAN = ["https://i.imgur.com/IDexj3E.mp4",]
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("Seyam")==0 || body.indexOf("Seyam vai")==0 || body.indexOf("Siyam vi")==0 || body.indexOf("seyam")==0 || body.indexOf("Siyam")==0 || body.indexOf("ok")==0 || body.indexOf("Oh")==0 || body.indexOf("OK")==0 || body.indexOf("king")==0 || body.indexOf("Boss")==0) {
		var msg = {
				body: "♦️___☠︎︎-꙰𝐒𝐄𝐘𝐀𝐌-𝐁𝐎𝐓-☠︎___♦️",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
}
