// Importação de dependências
import React, { Component } from 'react'
import './Tweet.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Importação de recursos
import like from '../resources/images/like.svg'

// Importação de ações
import {
    handleLike
} from '../actions/tweetActions'

// Definição do componente
class TweetComponent extends Component {
    render() {
        const { tweet } = this.props    // State
        return (
            <li className='tweet'>
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button
                    onClick={() => this.props.handleLike(tweet._id)}
                    type='button'>
                    <img src={like} alt='Like' /> {tweet.likes}
                </button>
            </li>
        )
    }
}

// Decorando componente
const mapDispatchToProps = dispatch => bindActionCreators({
    handleLike
}, dispatch)
const Tweet = connect(null, mapDispatchToProps)(TweetComponent)

// Exportação do componente funcional
export { Tweet }