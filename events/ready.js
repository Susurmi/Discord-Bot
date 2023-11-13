const { Events, Client, ActivityType } = require('discord.js');
const config = require('../json/config.json');
const colors = require('colors');

module.exports = {
	name: Events.ClientReady,
	once: true,

	/**
	 * @param {Client} client
	 */

	execute(client) {
		client.user.setUsername(config.bot.nickname);

		client.user.setActivity({
			type: ActivityType.Custom,
			name: 'bot-status',
			state: config.bot.status,
		});

		console.log(colors.blue(`➤ Ready! Logged in as ${client.user.username}.`));
	},
};
