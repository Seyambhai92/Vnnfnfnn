const fs = require("fs");
module.exports = {
	config:{
	name: "seyam",
	version: "1.0.1",
	premium: false,	
        prefix: true,
	permssion: 0,
	credits: "seyambhi", 
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
	const NAYAN = ["https://i.imgur.com/50HDAOH.mp4",]
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("Seyam")==0 || body.indexOf("SIYAM")==0 || body.indexOf("Siyam")==0 || body.indexOf("vai")==0 || body.indexOf("VAI")==0 || body.indexOf("🙄")==0 || body.indexOf("😏")==0 || body.indexOf("💔")==0 || body.indexOf("😭")==0 || body.indexOf("💔")==0) {
		var msg = {
				body: "💔__-꙰𝐒𝐄𝐘𝐀𝐌-𝐁𝐎𝐓___💫",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("💫", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
	}
	    }
