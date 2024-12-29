const telegraf = require('Telegraf');
const message = require("telegraf/filters");
const dotenv = require("dotenv");

dotenv.config();

const key = process.env.BOT_API_KEY;

console.log(key)
