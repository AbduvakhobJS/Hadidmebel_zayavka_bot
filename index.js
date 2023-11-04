const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
require('dotenv').config()
require('./bot/bot')

app.use(express.json())


async function dev(){
    try {
       await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true
        })
        .then(() => {
            console.log("Malumotlar bazasi ishlayapti");
        })
        .catch((error) => {
            console.log(error)
        })
        app.listen(process.env.PORT, () => {
            console.log("Server ishlayapti")
        })
    } catch (error) {
        console.log(error)
    }
}
dev()