import { GroupSettingChange } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'open',
            description: 'Opens the group for all participants.',
            category: 'moderation',
            usage: `${client.config.prefix}open`,
            baseXp: 500
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply("📍 Darling tell me, how can I Open the group for everyone without being an Admin?")
        if (M.groupMetadata.announce === 'false') return void M.reply('Group is already open, Baka!')

        this.client.groupSettingChange(M.groupMetadata.id, GroupSettingChange.messageSend, false)
    }
}
