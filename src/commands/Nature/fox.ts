/** @format */ 

import MessageHandler from "../../Handlers/MessageHandler"
import BaseCommand from "../../lib/BaseCommand"
import WAClient from "../../lib/WAClient"
import { ISimplifiedMessage } from "../../typings"
const gen = require("images-generator");
import request from "../../lib/request"
import { MessageType, Mimetype, MimetypeMap } from "@adiwajshing/baileys"

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'fox',
            description: `Will send you random fox image .`,
            aliases: ['fox'],
            category: 'nature',
            usage: `${client.config.prefix}fox`,
            baseXp: 500
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
      const i = await gen.animal.fox()
      const buffer = await request.buffer(i).catch((e) => {
            return void M.reply(e.message)
      })
      while (true) {
        try {
          M.reply(
            buffer || 'Could not fetch image. Please try again later',
            MessageType.image,
            undefined,
            undefined,
            `📍 Awooooo...\n`,
            undefined
          ).catch((e) => {
            console.log(
            `This Error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`
          );
          // console.log('Failed')
          M.reply(`Could not fetch image. Here's the URL: ${i}`);
        });
        break;
      } catch (e) {
        // console.log('Failed2')
        M.reply(`Could not fetch image. Here's the URL : ${i}`);
        console.log(
          `This Error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`
        );
      }
    }
    return void null;
  };
}
