import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'stickerserach',
            aliases: ['ssh', 'ssc'],
            description: 'Search sticker. ',
            category: 'utils',
            dm: true,
            usage: `${client.config.prefix}stickerserach [keywords]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {

        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const cara = joined.trim()
        console.log(cara)

        const { data } = await axios.get(`https://g.tenor.com/v1/search?q=${cara}&key=LIVDSRZULELA&limit=8`)

if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        //const i = Math.floor(Math.random() * data.result.length)
const b = `${data.results?.[Math.floor(Math.random() * data.results.length)]?.media[0]?.mp4?.url}`

        const sticker: any = await new Sticker(b, {
			pack: "📍 Zero Two 📍",
			author: "By: Deepak ",
			quality: 90,
			type: "crop",
			categories: ["🎊"],
		});

      await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,)
}





}
