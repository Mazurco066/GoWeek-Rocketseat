// Importação de Dependências
import React, { Component } from 'react'
import { 
  AsyncStorage,
  SafeAreaView,
  StyleSheet, 
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

 // Importação de recursos
 import Icon from 'react-native-vector-icons/MaterialIcons'

 // Importação de ações do componente
import {
  handleInputChange,
  handleNewTweet
} from '../actions/tweetActions'

// Definição do componente
class NewComponent extends Component {
  static navigationOptions = {
    header: null
  }
  goBack = () => {
    this.props.navigation.pop()
  }
  handleTweet = async () => {
    const { newTweet } = this.props //State
    const { handleNewTweet } = this.props //Action
    const tweet = {
      author: await AsyncStorage.getItem('@GoTwitter:username'),
      content: newTweet
    }
    handleNewTweet(tweet)
    this.goBack()
  }
  render() {
    const { newTweet } = this.props
    const { handleInputChange } = this.props
    return(
      <SafeAreaView style={ styles.container }>
        <View style={ styles.header }>
          <TouchableOpacity onPress={this.goBack}>
            <Icon name='close' size={24} color='#4BB0EE'/>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button } onPress={this.handleTweet} >
            <Text style={ styles.buttonText }>Tweetar</Text>
          </TouchableOpacity>
        </View>
        <TextInput 
          style={ styles.input }
          multiline
          placeholder='O que está acontecento?'
          value={newTweet}
          onChangeText={handleInputChange}
          placeholderTextColor='#999'
          returnKeyType='send'
          onSubmitEditing={this.handleTweet} />
      </SafeAreaView>
    )
  }
}

// Decoração do componente
const mapStateToProps = state => ({newTweet: state.tweet.newTweet})
const mapDispatchToProps = dispatch => bindActionCreators({
    handleInputChange,
    handleNewTweet
}, dispatch)
const New = connect(mapStateToProps, mapDispatchToProps)(NewComponent)

// Exportação do Componente
export { New }

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: "#333"
  }
});
