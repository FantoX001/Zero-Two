import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import yts from 'yt-search'
import YT from '../../lib/YT'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'play2',
            description: '📹 play a video with just search term!',
            category: 'media',
            aliases: ['video'],
            usage: `${client.config.prefix}play2 [term]`,
            baseXp: 500
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply(' Provide a search term, Baka!')
        const term = joined.trim()
        const { videos } = await yts(term)
        if (!videos || videos.length <= 0) return void M.reply(`⚓ No Matching videos found for the term : *${term}*`)
        const video = new YT(videos[0].url, 'video')
        if (!video.url) return
        M.reply('📍 Downloading and Sending...')
        this.client
            .sendMessage(M.from, await video.getBuffer(), MessageType.video, {
                quoted: M.WAMessage,
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: video.url
                    }
                }
            })
            .catch((reason: Error) => M.reply(`✖ An error occurred. Please try again later.`))
    }
}
