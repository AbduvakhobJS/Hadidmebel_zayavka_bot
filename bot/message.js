const { bot } = require("./bot");

const { start } = require("./helper/start");
const { end_function } = require("./helper/location");



bot.on('message', async msg => {
    const chatId = msg.from.id
    const text = msg.text
    
    if(text === '/start'){
        start(msg, chatId)
    }

    if(msg.contact){
        end_function(msg)
    }


})