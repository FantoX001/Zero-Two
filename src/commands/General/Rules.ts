import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rules',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4'
        ]
        let zerotwo = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: zerotwo }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `_*----📍[Rules for Zero Two's usage]📍----*_\n\n\n*>>>* use #support to get the Official group link in your dm.\n\n*--->*  If you want to chat with Zero Two you can use #chat *Don't chat in private bot can't chat in PC.\n\n*--->* If you want to add Zero Two in your group the contact the owner by *#owner/#mods* \n\n*--->* Dont use wrong command, use the command given in the *#help* list \n\n*--->* Dont spam the bot with commands if Zero Two is not responding, its means the maybe owner is offline or facing internet issue. \n\n*--->* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED* 🚫 \n\n\n*Developer: 𝕊𝔸ℝ𝔸𝕄* ` }
        )
    }
}
   
