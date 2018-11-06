// Importação do Model do Tweet
const  Tweet = require('../models/Tweet')

// Exportação dos métodos de API do Tweet
module.exports = {
    async index(req, res) { // Listagem de tweets
        const tweets = await Tweet.find({}).sort('-createdAt')
        return res.json(tweets)
    },
    async store(req, res) { // Criação de tweets
        const tweet = await Tweet.create(req.body)
        req.io.emit('tweet', tweet)
        return res.json(tweet)
    }
}