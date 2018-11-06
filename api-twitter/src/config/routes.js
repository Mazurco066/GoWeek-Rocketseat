// Importação do Express
const express = require('express')

// Criação do Router
const routes = express.Router()

// Importação de controllers
const TweetController = require('../controllers/TweetController')
const LikeController = require('../controllers/LikeController')

// Rota Raiz
routes.get('/', (req, res) => {
    return res.send('API para clone Twitter')
})

// Rotas para Tweets
routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetController.store)

// Rotas para Likes
routes.post('/likes/:id', LikeController.store)

// Exportação das configurações de rota
module.exports = routes