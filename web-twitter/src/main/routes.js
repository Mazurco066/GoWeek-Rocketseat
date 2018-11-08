// Importação de dependências
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

// Importando os componentes locais
import {
    Login,
    TimeLine
} from '../scenes/Scenes'

// Criação das Rotas
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/timeline' component={TimeLine} />
        </Switch>
    </BrowserRouter>
)

// Exportação das rotas
export default Routes