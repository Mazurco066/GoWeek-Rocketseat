// Importação de Dependências
import React, { Component } from 'react'
import { 
  AsyncStorage,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
 } from 'react-native'
 import { 
   StackActions,
   NavigationAction
 } from 'react-navigation'

 // Importação de recursos
 import Icon from 'react-native-vector-icons/FontAwesome'

// Definição do componente
class Login extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    username: ''
  }
  async componentDidMount() {
    const username = AsyncStorage.getItem('@GoTwitter:username')
    if (username) {
      this.navigateToTimeline()
    }
  }
  handleInputChange = username => { this.setState({ username }) }
  handleLogin = async () => {
    const { username } = this.state
    if (!username.length) return
    await AsyncStorage.setItem('@GoTwitter:username', username)
    this.navigateToTimeline()
  }
  navigateToTimeline = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: NavigationAction.navigate({ routeName: 'Timeline' })
    })
    this.props.navigation.dispatch(resetAction)
  }
  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior='height' >
        <View style={styles.content} >
          <View>
            <Icon name='twitter' size={64} color='#4BB0EE' />
          </View>
          <TextInput
            placeholder='Nome de Usuário'
            onChangeText={this.handleInputChange}
            style={styles.input}
            value={this.state.username}
            returnKeyType='send'
            onSubmitEditing={this.handleLogin} />
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button} >
            <Text style={styles.buttonText} >Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

// Exportação do Componente
export { Login }

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },
  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
