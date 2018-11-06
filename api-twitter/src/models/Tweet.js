// Importação de dependências
const mongoose = require('mongoose')

// Definição do Schema de Tweet
const TweetSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Exportação do Schema
module.exports = mongoose.model('Tweet', TweetSchema)