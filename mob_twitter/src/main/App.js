// Importação de dependências
import React, {Component} from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// Importação de midwares
import promise from 'redux-promise'
import thunk from 'redux-thunk'

// Importação dos reducers
import reducers from '../reducers/reducers'

// Definição da store
const store = applyMiddleware(promise, thunk)(createStore)(reducers)

// Importação das rotas
import Routes from './routes'

// Classe principal do app
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
