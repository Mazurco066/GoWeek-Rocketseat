// Importação de Dependências
import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Importação de recursos
import Icon from 'react-native-vector-icons/Ionicons'

// Importação de ações
import {
  handleLike
} from '../actions/tweetActions'

// Definição do componente
class TweetComponent extends Component {
  render() {
    const { tweet } = this.props  // State
    const { handleLike } = this.props //Actions
    return(
      <View style={ styles.container } >
        <Text style={ styles.author } >{tweet.author}</Text>
        <Text style={ styles.content } >{tweet.content}</Text>
        <TouchableOpacity onPress={() => handleLike(tweet._id)} style={ styles.likeButton }>
          <Icon name='ios-heart-empty' size={20} color='#999' />
          <Text style= { styles.likeText }>{tweet.likes}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// Decorando componente
const mapDispatchToProps = dispatch => bindActionCreators({
  handleLike
}, dispatch)
const Tweet = connect(null, mapDispatchToProps)(TweetComponent)

// Exportação do Componente
export { Tweet }

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C2022"
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "#1C2022",
    marginVertical: 10
  },

  likeButton: {
    flexDirection: "row",
    alignItems: "center"
  },

  likeText: {
    color: "#999",
    marginLeft: 5
  }
});
