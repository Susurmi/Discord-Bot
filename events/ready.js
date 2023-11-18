const { Events, Client, ActivityType } = require('discord.js');
const config = require('../json/config.json');
const colors = require('colors');
const configs = require('../json/config.json');

module.exports = {
	name: Events.ClientReady,
	once: true,

	/**
	 * @param {Client} client
	 */

	execute(client) {
		const { data: text } = client.text.find((obj) => obj.lang === configs.lang || 'en');
		client.user.setUsername(config.bot.nickname);

		client.user.setActivity({
			type: ActivityType.Custom,
			name: 'bot-status',
			state: config.bot.status,
		});

		console.log(colors.blue(text.ready.success(client.user.username)));
	},
};
