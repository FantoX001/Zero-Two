import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
          'https://c.tenor.com/dEYkyvVk4OQAAAPo/lol.mp4'
        ]
        let zerotwo = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: zerotwo }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:`                                                                   
🌠 𝕌𝕤𝕖𝕣: *${M.sender.username}*  
🌠 ℙ𝕣𝕖𝕗𝕚𝕩: ${this.client.config.prefix} 
🌠 𝕆𝕨𝕟𝕖𝕣: *${this.client.config.prefix}mod*
🌠 𝕆𝕗𝕗𝕚𝕥𝕚𝕒𝕝 𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝔾𝕣𝕠𝕦𝕡: https://goo.su/EZjhEz  
🌠 𝕋𝕠 𝕛𝕠𝕚𝕟: use #sᴜᴘᴘᴏʀᴛ

     ❱❱❱❱❱🎡🔪zero-Two Bot🔪🎡❰❰❰❰❰ 

❱❱❱❱❱🧧✨Coding✨🧧❰❰❰❰❰ 
•github

❱❱❱❱❱🧧✨Educative Tools✨🧧❰❰❰❰❰ 
•Brainly,calculator,crypto,element,ip,weather,trivia,urbandictionary 

❱❱❱❱❱🧧✨For Fun✨🧧❰❰❰❰❰ 
•Ppcouple,fact,jail,joke,quote,rip,react,ship,trash,trigger,baka,wanted,why,dare,truth,wasted,chat,doge 

❱❱❱❱❱🧧✨Games✨🧧❰❰❰❰❰ 
•chess

❱❱❱❱❱🧧✨General Commands✨🧧❰❰❰❰❰ 
•admins,exp,help,hi,info,invitelink,mods,profile,rank,support,zerotwo 

❱❱❱❱❱🧧✨Media✨🧧❰❰❰❰❰ 
•Karaoke,lyrics,play,spotify,ytaudio,ytvideo,ytsearch,iguser,igdl,tiktok,video,pinterest,toimg 

❱❱❱❱❱🧧✨Admins Only✨🧧❰❰❰❰❰ 
•Activate,deactivate,open,close,promote,demote,delete,everyone,groupchange,revoke,remove,purge 

❱❱❱❱❱🧧✨Nature✨🧧❰❰❰❰❰ 
•fox

❱❱❱❱❱🧧✨Utilities✨🧧❰❰❰❰❰ 
•Blur,circle,gif,google,retrieve,screenshot,steal,sticker,stickersearch,subred,translate,wikipedia,amazon,shorturl 

❱❱❱❱❱🧧✨Weeb✨🧧❰❰❰❰❰ 
Anime,animeme,character,characterid,genshincharacter,kitsune,waifu,crossplay,neko,manga,pokemon,sauce,vtuber,megumin,waifu,wallpaper,randomwallpaper
   	
     ❱❱❱❱❱🍭🎡✨Zero Two✨🎡🍭❰❰❰❰❰ 
    Based on: Chitoge and Void
       Modifyed By: 𝕊𝔸ℝ𝔸𝕄
    ©️ Synthesized Infinity

`}
        )
    }
}
