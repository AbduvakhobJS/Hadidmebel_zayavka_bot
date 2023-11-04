const { bot } = require("../bot");


const send_location = async (query, chatId) => {
    await bot.sendMessage(chatId, `Iltimos siz bilan bo'g'lanishimiz uchun raqamingizni yuboring`,{
        reply_markup: {
            keyboard: [
                [
                    {
                        text: `Raqamni yuborish`,
                        request_contact: true
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
}



const end_function = async (msg) => {
    const chatId = msg.from.id
    await bot.sendMessage(chatId, `Murojatingiz menejerimizga yuborildi tez orada siz bilan bo'g'lanamiz😊`,{
        reply_markup: {
            keyboard:[

            ],
            remove_keyboard: true
        }
    })
}

module.exports = {send_location, end_function}