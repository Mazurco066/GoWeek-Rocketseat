// Importação do cliente mongoose
const mongoose = require('mongoose')

// Exportação da conexão com banco
module.exports =  mongoose.connect('mongodb://goweek:goweek123@ds153593.mlab.com:53593/api-twitter', {
    useNewUrlParser: true
})

// Definição de mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."