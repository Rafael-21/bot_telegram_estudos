const { Telegraf } = require('telegraf');
const process = require('./process.env.json');
const bot = new Telegraf(process.BOT_TOKEN);

bot.start(content =>{
    const from = content.update.message.from

    console.log(from)

    content.reply(`Seja bem-vindo, ${from.first_name}!`)
});

bot.startPolling();
console.log('Bot rodando!');