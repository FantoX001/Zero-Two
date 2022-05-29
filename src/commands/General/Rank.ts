/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";
import Canvacord from "canvacord";
import { MessageType } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rank",
			description: "Displays User's Stats",
			category: "general",
			usage: `${client.config.prefix}rank [tag/quote]`,
			aliases: ["stats"],
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		if (M.quoted?.sender) M.mentioned.push(M.quoted.sender);
		const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid;
		let username = user === M.sender.jid ? M.sender.username : "";
		if (!username) {
			const contact = this.client.getContact(user);
			username =
				contact.notify || contact.vname || contact.name || user.split("@")[0];
		}
		let pfp: string;
		try {
			pfp = await this.client.getProfilePicture(user);
		} catch (err) {
			M.reply(`Profile Picture not Accessible of ${username}`);
			pfp =
				"https://wallpapercave.com/wp/wp6434536.jpg";
		}
		const exp = (await this.client.getUser(user)).Xp;
		let role: string;
				if (exp < 500) {
					role = "Child";
				} else if (exp < 1000) {
					role = "Citizen";
				} else if (exp < 2000) {
					role = "Baby Wizard";
				} else if (exp < 3000) {
					role = "Wizard";
				} else if (exp < 4000) {
					role = "Wizard Lord";
				} else if (exp < 5000) {
					role = "Baby Mage";
				} else if (exp < 7000) {
					role = "Mage";
				} else if (exp < 8500) {
					role = "Master of Mage";
				} else if (exp < 10000) {
					role = "Child of Noble";
				} else if (exp < 15000) {
					role = "Noble";
				} else if (exp < 20000) {
					role = "Seed of Elite";
				} else if (exp < 25000) {
					role = "Elite";
				} else if (exp < 50000) {
					role = "Ace-i";
				} else if (exp < 75000) {
					role = "Ace-ii";
				} else if (exp < 100000) {
					role = "Ace Master";
				} else if (exp < 120000) {
					role = "Ace Dominator";
				} else if (exp < 130000) {
					role = "Ace Elite";
				} else if (exp < 150000) {
					role = "Ace Supreme";
				} else if (exp < 200000) {
					role = "Supreme-i";
				} else if (exp < 220000) {
					role = "Supreme-ii";
				} else if (exp < 250000) {
					role = "Supreme Master";
				} else if (exp < 280000) {
					role = "Supreme Dominator";
				} else if (exp < 300000) {
					role = "Supreme Elite";
				} else if (exp < 350000) {
					role = "Supreme Commander";
				} else if (exp < 400000) {
					role = "Colonel-i";
				} else if (exp < 450000) {
					role = "Colonel-ii";
				} else if (exp < 500000) {
					role = "Colonel Master";
				} else if (exp < 550000) {
					role = "Colonel Dominator";
				} else if (exp < 600000) {
					role = "Colonel Leader";
				} else if (exp < 650000) {
					role = "Demon Lord Candidate";
				} else if (exp < 700000) {
					role = "Demon Lord Seed";
				} else if (exp < 750000) {
					role = "Future Demon Lord";
				} else if (exp < 800000) {
					role = "Demon Lord";
				} else if (exp < 850000) {
					role = "Leader Of Demon Lords";
				} else if (exp < 900000) {
					role = "Highest Level Demon Lord";
				} else {
					role = "📍 My Immortal Darling 📍";
				}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let level: number;
				if (exp < 500) {
					level = 1;
				} else if (exp < 1000) {
					level = 2;
				} else if (exp < 2000) {
					level = 3;
				} else if (exp < 3000) {
					level = 4;
				} else if (exp < 4000) {
					level = 5;
				} else if (exp < 5000) {
					level = 6;
				} else if (exp < 7000) {
					level = 7;
				} else if (exp < 8500) {
					level = 8;
				} else if (exp < 10000) {
					level = 9;
				} else if (exp < 15000) {
					level = 10;
				} else if (exp < 20000) {
					level = 11;
				} else if (exp < 25000) {
					level = 12;
				} else if (exp < 50000) {
					level = 13;
				} else if (exp < 75000) {
					level = 14;
				} else if (exp < 100000) {
					level = 15;
				} else if (exp < 120000) {
					level = 15;
				} else if (exp < 130000) {
					level = 16;
				} else if (exp < 150000) {
					level = 17;
				} else if (exp < 200000) {
					level = 18;
				} else if (exp < 220000) {
					level = 19;
				} else if (exp < 250000) {
					level = 20;
				} else if (exp < 280000) {
					level = 21;
				} else if (exp < 300000) {
					level = 22;
				} else if (exp < 350000) {
					level = 23;
				} else if (exp < 400000) {
					level = 24;
				} else if (exp < 450000) {
					level = 25;
				} else if (exp < 500000) {
					level = 26;
				} else if (exp < 550000) {
					level = 27;
				} else if (exp < 600000) {
					level = 28;
				} else if (exp < 650000) {
					level = 29;
				} else if (exp < 700000) {
					level = 30;
				} else if (exp < 750000) {
					level = 31;
				} else if (exp < 800000) {
					level = 32;
				} else if (exp < 850000) {
					level = 33;
				} else if (exp < 900000) {
					level = 34;
				} else {
					level = 35;
				}
		let required: number;
				if (exp < 500) {
					required = 500;
				} else if (exp < 1000) {
					required = 1000;
				} else if (exp < 2000) {
					required = 2000;
				} else if (exp < 3000) {
					required = 3000;
				} else if (exp < 4000) {
					required = 4000;
				} else if (exp < 5000) {
					required = 5000;
				} else if (exp < 7000) {
					required = 7000;
				} else if (exp < 8500) {
					required = 8500;
				} else if (exp < 10000) {
					required = 10000;
				} else if (exp < 15000) {
					required = 15000;
				} else if (exp < 20000) {
					required = 20000;
				} else if (exp < 25000) {
					required = 25000;
				} else if (exp < 50000) {
					required = 50000;
				} else if (exp < 75000) {
					required = 75000;
				} else if (exp < 100000) {
					required = 100000;
				} else if (exp < 120000) {
					required = 120000;
				} else if (exp < 130000) {
					required = 130000;
				} else if (exp < 150000) {
					required = 150000;
				} else if (exp < 200000) {
					required = 200000;
				} else if (exp < 220000) {
					required = 220000;
				} else if (exp < 250000) {
					required = 250000;
				} else if (exp < 280000) {
					required = 280000;
				} else if (exp < 300000) {
					required = 300000;
				} else if (exp < 350000) {
					required = 350000;
				} else if (exp < 400000) {
					required = 400000;
				} else if (exp < 450000) {
					required = 450000;
				} else if (exp < 500000) {
					required = 500000;
				} else if (exp < 550000) {
					required = 550000;
				} else if (exp < 600000) {
					required = 600000;
				} else if (exp < 650000) {
					required = 650000;
				} else if (exp < 700000) {
					required = 700000;
				} else if (exp < 750000) {
					required = 750000;
				} else if (exp < 800000) {
					required = 800000;
				} else if (exp < 850000) {
					required = 850000;
				} else if (exp < 900000) {
					required = 900000;
				} else {
					required=999999999999;
				}
		const rank = new Canvacord.Rank()
			.setAvatar(pfp)
			.setCurrentXP(exp || 0)
			.setRequiredXP(required)
			.setStatus("online", false)
			.setLevel(level, "Level:", true)
			.setRank(0, `Role: ${role}`, true)
			.setProgressBar("#f312ff", "COLOR")
			.setOverlay("#000000")
			.setUsername(username)
			.setDiscriminator("0007")
			.setBackground("COLOR", "#000000");
		rank.build({}).then((rankcard) => {
			const text = `🏮 *Username: ${username}*\n\n〽️ *Level: ${level}*\n\n⭐ *Exp: ${
				exp || 0
			} / ${required}*\n\n💫 *Role: ${role}*\n\n`;
			M.reply(
				rankcard,
				MessageType.image,
				undefined,
				undefined,
				text,
				undefined
			);
		});
	};
}
