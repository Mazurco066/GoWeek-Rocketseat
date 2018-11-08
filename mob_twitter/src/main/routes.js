// Importação de dependências
import { createStackNavigator } from 'react-navigation'

// Importação de Scenes
import {
    Login,
    Timeline,
    New
} from '../scenes/Scenes'

/*
    StackNavigator - Navegação Manual
    TabNavigator - Navegação por abas
*/

// Criação das rotas
const Routes = createStackNavigator({
    Login,
    Timeline,
    New
})

// Exportação das rotas
export default Routes
