const { bot } = require("./bot");
const { send_location } = require("./helper/location");
const { send_all_material } = require("./helper/material");
const { style, styleRu } = require("./helper/start");
const { send_all_views} = require("./helper/view");




bot.on('callback_query', async query => {
    bot.answerCallbackQuery(query.id)
    const { data } = query
    const chatId = query.from.id
    console.log(data)


    if(data.includes(`uzbek`)){
        style(query,chatId)
    }
    if(data.includes(`ruskiy`)){
        styleRu(query,chatId)
    }

    if(data.includes(`hi-tech`)){
        send_all_views(query)
    }
    if(data.includes(`klassik`)){
        send_all_views(query)
    }
    if(data.includes(`Neoklassik`)){
        send_all_views(query)
    }


    if(data.includes(`to'g'ri`)){
        send_all_material(query, chatId)
    }
    if(data.includes(`G`)){
        send_all_material(query, chatId)
    }
    if(data.includes(`P`)){
        send_all_material(query, chatId)
    }


    if(data.includes(`ldsp`)){
        send_location(query,chatId)
    }
    if(data.includes(`lmdf`)){
        send_location(query,chatId)
    }
    if(data.includes(`akril`)){
        send_location(query,chatId)
    }
    if(data.includes(`kraska`)){
        send_location(query,chatId)
    }
    
})