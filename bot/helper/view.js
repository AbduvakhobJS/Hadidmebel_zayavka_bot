const { bot } = require("../bot");



const send_all_views = async (query) => {
        const chatId = query.from.id
        await bot.sendMessage(chatId, `Ko'rinishni tanlang ${query.from.first_name}`,{
                reply_markup:{
                        inline_keyboard: [
                                [
                                        {
                                                text: "To'g'ri ko'rinish",
                                                callback_data: `to'g'ri`
                                        },
                                        {
                                                text: "G-ko'rinish",
                                                callback_data: `G`
                                        },  
                                        {
                                                text: "P-ko'rinish",
                                                callback_data: `P`
                                        }
                                ]
                        ]
                }
        })
       
}


module.exports = { send_all_views}



