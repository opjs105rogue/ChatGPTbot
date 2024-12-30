const {Telegraf} = require("telegraf");
const message = require("telegraf/filters");
const dotenv = require("dotenv");
const {OpenAI} = require("openai");

dotenv.config();

const BOT_KEY = process.env.BOT_API_KEY;
const APENAI_KEY = process.env.GPT_API_KEY;

const client = new OpenAI({
    apiKey: APENAI_KEY,
});

// console.log(BOT_KEY)
// console.log(APENAI_KEY)

const bot = new Telegraf(BOT_KEY);

bot.on("text", async(ctx:any)=> {
    console.info("Бот считывает сообщ")
    const userMessage = ctx.message.text;
})

bot.launch()