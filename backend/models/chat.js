const mongoose = require('mongoose');


const whatsAppschema = new mongoose.Schema({
    name:String,
    message:String,
    receive:Boolean,
    timestamp:String
})

const clone = mongoose.model("whatsApp",whatsAppschema)

module.exports =  clone