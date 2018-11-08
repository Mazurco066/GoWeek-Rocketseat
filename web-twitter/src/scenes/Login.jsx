// Importação de dependências
import React, { Component } from 'react'
import './Login.css'

// Importação de recursos
import twitterLogo from '../resources/images/twitter.svg'

// Definição do componente
class Login extends Component {
    state = {
        username: ''
    }
    handleInputChange = (e) => {
        this.setState({ username: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { username } = this.state
        // Verificação de preenchimento
        if (!username.length) return
        // Armazenamento de usuário no storage do navegador
        localStorage.setItem('@GoTwitter:username', username)
        this.props.history.push('./timeline')
    }
    render() {
        return(
            <div className='login-wrapper'>
                <img src={twitterLogo} alt='GoWeew Twitter' />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.username}
                        onChange={this.handleInputChange} 
                        placeholder='Nome Usuário' />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}

// Exportação do componente
export { Login }