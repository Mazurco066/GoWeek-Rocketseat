// Importação de dependências para aplicação executar no browser
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// Importação de midwares
import promise from 'redux-promise'
import thunk from 'redux-thunk'

// Importação dos reducers
import reducers from './reducers/reducers'

// Definição da store
const store = applyMiddleware(promise, thunk)(createStore)(reducers)

// Renderização principal do App
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// Service worker - remover aplicação
serviceWorker.unregister();
