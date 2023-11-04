const {bot} = require('../bot');
const { uz, ru } = require('./lang');


const start = async (msg, chatId) => {
    bot.sendMessage(chatId, `Asslomu alaykum ${msg.from.first_name}. Tilni tanlang\nПривет ${msg.from.first_name}. Выберите язык`,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Uzbek 🇺🇿",
                        callback_data: "uzbek"
                    },
                    {
                        text: "Русский 🇷🇺",
                        callback_data: 'ruskiy'
                    }
                ]
                
                
            ]
        }
    })
}


const style = async (query, chatId) => {
    bot.sendMessage(chatId, `Uslubni tanlang ${query.from.first_name} `,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: uz.title1,
                        callback_data: "hi-tech"
                    }
                ],
                [
                    {
                        text: uz.title2,
                        callback_data: 'klassik'
                    }
                ],
                [
                    {
                        text: uz.title3,
                        callback_data: 'neoklassik'
                    }
                ]
            ]
        }
    })
}
const styleRu = async (query, chatId) => {
    bot.sendMessage(chatId, `Выберите стиль ${query.from.first_name}`,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: ru.title1,
                        callback_data: "hi-tech"
                    }
                ],
                [
                    {
                        text: ru.title2,
                        callback_data: 'klassik'
                    }
                ],
                [
                    {
                        text: ru.title3,
                        callback_data: 'neoklassik'
                    }
                ]
            ]
        }
    })
}





module.exports = {start, style, styleRu }