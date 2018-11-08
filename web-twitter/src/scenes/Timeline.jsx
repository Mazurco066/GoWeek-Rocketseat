// Importação de dependências
import React, { Component } from 'react'
import './Timeline.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import socket from 'socket.io-client'

// Importação de recursos
import twitterLogo from '../resources/images/twitter.svg'

// Importação de componentes locais
import {
    Tweet
} from '../components/Components'

// Importação de ações do componente
import {
    handleInputChange,
    handleNewTweet,
    search
} from '../actions/tweetActions'

// Definição do componente
class TimeLineComponent extends Component {
    handleAction = (event) => {
        const {  handleInputChange, handleNewTweet } = this.props
        if (event.keyCode != 13)  handleInputChange(event)
        else {
            const tweet = {
                content: this.props.tweet.newTweet,
                author: localStorage.getItem('@GoTwitter:username')
            }
            handleNewTweet(tweet)
        }
        
    }
    componentDidMount() {
        this.subscribeToEvents()
        const { search } = this.props
        search()
    }
    renderRows = () => {
        const { tweets } = this.props.tweet
        return tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
        ))
    }
    render() {
        const { newTweet } = this.props.tweet // States
        return(
            <div className='timeline-wrapper'>
                <img height={24} src={twitterLogo} alt='GoTwitter' />
                <form>
                    <textarea
                        placeholder='O que está acontecendo?' 
                        onChange={this.handleAction}
                        onKeyDown={this.handleAction}
                        value={newTweet}>
                    </textarea>
                </form>
                <ul className='tweet-list'>
                    {this.renderRows()}
                </ul>
            </div>
        )
    }
    subscribeToEvents = () => {  
        // Definindo endereço da api
        const io =socket('http://localhost:3001')

        // Recuperando método de busca
        const { search } = this.props
        search()

        // Atualização de novo tweet
        io.on('tweet', data => { search() })

        // Atualização de novo like
        io.on('like', data => { search() })
    }
}

// Decorando componente
const mapStateToProps = state => ({tweet: state.tweet})
const mapDispatchToProps = dispatch => bindActionCreators({
    handleInputChange,
    handleNewTweet,
    search
}, dispatch)
const TimeLine = connect(mapStateToProps, mapDispatchToProps)(TimeLineComponent)

// Exportação do componente
export { TimeLine }