const {Telegraf} = require("telegraf");
const message = require("telegraf/filters");
const dotenv = require("dotenv");
const {OpenAI} = require("openai");
const http = require("http");
import { HttpsProxyAgent } from 'https-proxy-agent';

dotenv.config();

const BOT_KEY = process.env.BOT_API_KEY;
const APENAI_KEY = process.env.GPT_API_KEY;
const agent = new HttpsProxyAgent('http://168.63.76.32:3128');

const client = new OpenAI({
    apiKey: APENAI_KEY,
    httpAgent: agent,
});

// console.log(BOT_KEY)
// console.log(APENAI_KEY)

const bot = new Telegraf(BOT_KEY);

bot.on("text", async(ctx:any)=> {
    console.info("Бот считывает сообщ")
    const userMessage = ctx.message.text;

    try {
        console.info("Запрос отправился...")
        const response = await client.chat.completions.create(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: userMessage,
                    },
                ]
            }
        );

        const gptMessage = response.choices[0].message.content;
        await ctx.reply(gptMessage);

    } catch(error) {
        console.error("Error while processing message:", error);
        await ctx.reply("Произошла ошибка при обработке вашего запроса.");
    }
});

bot.launch()