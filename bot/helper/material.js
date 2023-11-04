const { bot } = require("../bot");


const send_all_material = async (query, chatId) => {
    await bot.sendMessage(chatId, `Material turini tanlan ${query.from.first_name}`,{
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "LDSP",
                        callback_data: 'ldsp'
                    },
                    {
                        text: "LMDF",
                        callback_data: 'lmdf'
                    },
                    {
                        text: "Akril",
                        callback_data: 'akril'
                    },
                    {
                        text: "Kraska",
                        callback_data: 'kraska'
                    }
                ]
            ]
        }
    })
}



module.exports = {send_all_material}