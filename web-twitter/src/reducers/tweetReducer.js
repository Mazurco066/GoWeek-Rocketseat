// Definição do estado inicial do reducer
const INITIAL_STATE = {
    newTweet: '',
    tweets: []
}

// Definição do reducer
export default (state = INITIAL_STATE, action) => {
    //Verificando ação que foi dado dispatch
    switch (action.type) {
        case 'NEW_TWEET_CHANGED':
            return { ...state, newTweet: action.payload }     
        case 'NEW_TWEET':
            return { ...state, newTweet: action.payload } 
        case 'LIKE_TWEET':
            return state
        case 'LIST_TWEETS':
            return { ...state, tweets: action.payload }
        default:
            return state
    }
}