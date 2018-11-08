// Declaração de dependências
import { combineReducers } from 'redux'

// Importação dos reducers da aplicação
import tweetReducer from './tweetReducer'

// Definindo reducer mestre
const rootReducer = combineReducers({
    tweet: tweetReducer
})

// Exportação do dos reducers da aplicação
export default rootReducer