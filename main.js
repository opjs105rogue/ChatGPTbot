"use strict";
const Telegraf = require('telegraf');
const message = require("telegraf/filters");
const dotenv = require("dotenv");
dotenv.config();
const key = process.env.BOT_API_KEY;

