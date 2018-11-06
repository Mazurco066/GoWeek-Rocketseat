// importação do serviço de Tweets
const Tweet = require('../models/Tweet')

// Exportação de métodos de API de  Likes
module.exports = {
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id)
        tweet.set({ likes: tweet.likes + 1 })
        await tweet.save()
        req.io.emit('tweet', tweet)
        return res.json(tweet)
    }
}