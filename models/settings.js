const mongoose = require('mongoose')
const settingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,

    prefix: String,

    chatbot: Boolean,

    channelignorestats: Boolean,
    channelignore: String,
    
});
module.exports = mongoose.model("Setting",settingSchema)
