const fs = require("fs");
module.exports = {
	config:{
	name: "tanvir1",
	version: "1.0.1",
	premium: false,	
        prefix: true,
	permssion: 0,
	credits: "Tanvir1", 
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
	const NAYAN = ["https://i.imgur.com/LIO2Btv.mp4",]
  const NAYAN = ["https://i.imgur.com/50HDAOH.mp4",]
  const NAYAN = ["https://i.imgur.com/50HDAOH.mp4",]
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("Seyam")==0 || body.indexOf("Seyam vai")==0 || body.indexOf("🙂")==0 || body.indexOf("SIYAM")==0 || body.indexOf("Siyam")==0 || body.indexOf("bujci")==0 || body.indexOf("😔")==0 || body.indexOf("Siyam")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
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
