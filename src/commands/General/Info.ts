import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import request from "../../lib/request";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "info",
			description: "Will display the info the bot",
			category: "general",
			usage: `${client.config.prefix}info`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		/*eslint-disable @typescript-eslint/no-explicit-any*/
                const users = await this.client.DB.user.countDocuments();
                const uban = await this.client.DB.user.countDocuments({ban: true});
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
                const pad = (s: any) => (s < 10 ? "0" : "") + s;
		const formatTime = (seconds: any) => {
			const hours = Math.floor(seconds / (60 * 60));
			const minutes = Math.floor((seconds % (60 * 60)) / 60);
			const secs = Math.floor(seconds % 60);
			return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
		};
		const uptime = () => formatTime(process.uptime());
		await M.reply(await request.buffer(`https://c.tenor.com/IqqjXGYjtHYAAAPo/anime-pink-hair.mp4`),
            MessageType.video,
            Mimetype.gif,
            undefined,
            `🐧ℤ𝔼ℝ𝕆 𝕋𝕎𝕆🐧\n\n🩻 Total Groups: ${chats.length}
	    \n\n☣️ Last Re-booted: ${uptime()}\n\n🦋 My cute people: ${users}\n\n🔪 Banned Users: ${uban}\n\n♨️ Horny Peps: 437\n\n Developer: 𝕊𝔸ℝ𝔸𝕄\n\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))	
	};
}
