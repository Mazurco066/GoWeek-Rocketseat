// Recuperar instância do express
const express = require('express')
const cors = require('cors')
const PORT = 3001

// Criando uma Instância do Express
const app = express()

// Habilitando requisições realtime
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Conexão com banco de dados
require('./config/database')

// Disponibilizando io para todos controllers
app.use((req, res, next) => {
    req.io = io
    return next()
})

// Importação de configuração de rotas
app.use(cors())
app.use(express.json())
app.use(require('./config/routes'))

// Inicialização do servidor
server.listen(PORT, () => {
    console.log(`:) Server started on port ${PORT} :3`)
})