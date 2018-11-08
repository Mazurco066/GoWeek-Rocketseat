// Importação do uso da api
import axios from 'axios'

// Definição da Url base da Api
const BASE_URL = 'http://localhost:3001'

// Ação de alteração no conteúdo do tweet
export const handleInputChange = (event) =>  ({
    type: 'NEW_TWEET_CHANGED', payload: event.target.value
})

// Ação de criar novo tweet
export const handleNewTweet = (tweet) => {
    return dispatch => {
        axios.post(`${BASE_URL}/tweets`, tweet)
            .then(() => {
                dispatch({
                    type: 'NEW_TWEET', 
                    payload: ''
                })
            })
    }
}  

// Ação de dar like em tweet
export const handleLike = (id) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/likes/${id}`)
            .then(() => {
                dispatch({
                    type: 'LIKE_TWEET', 
                })
            })
    }
}

// Ação de listagem de tweets
export const search = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/tweets`)
            .then(resp => dispatch({type: 'LIST_TWEETS', payload: resp.data}))
    }
}
    
