/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "zerotwo",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 30,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/z6GMGNV3teMAAAPo/darling-in-the-franxx-zero-two.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `📍 *Zero Two* 📍\n\n🍀 *Description: A WhatsApp Bot With advanced features developed and hosted by 𝕊𝔸ℝ𝔸𝕄✨.*\n\n🌐 *Saram GitHub URL: https://github.com/saramkhani* \n\n  👾 *Zero Two's URL:https://github.com/saramkhani/Zero-Two* \n\n 📒  *Guide: https://github.com/FantoX001/Zero-Two-Guides* \n\n`,
			}
		);
	};
}
