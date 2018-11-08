// Importação de Dependências
import React, { Component } from 'react'
import socket from 'socket.io-client'
import { 
  FlatList,
  StyleSheet, 
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Importação de componentes locais
import {
  Tweet
} from '../components/Components'

// Importação de ações do componente
import {
  search
} from '../actions/tweetActions'

// Importação de recursos
import Icon from 'react-native-vector-icons/MaterialIcons'

// Definição do componente
class TimelineComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Icon name='add-circle-outline' size={24} color='#4BB0EE' style={{ marginRight: 20 }} />
      </TouchableOpacity>
    )
  })
  componentDidMount() {
    this.subscribeToEvents()
    const { search } = this.props
    search()
  }
  render() {
    const { tweets } = this.props.tweet
    return(
      <View style={styles.container}>
        <FlatList
          data={tweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({ item }) => <Tweet tweet={item} />} />
      </View>
    )
  }
  subscribeToEvents = () => {  
    // Definindo endereço da api
    const io = socket('http://10.0.3.2:3001')

    // Recuperando método de busca
    const { search } = this.props

    // Atualização de novo tweet
    io.on('tweet', data => { search() })

    // Atualização de novo like
    io.on('like', data => { search() })
  }
}

// Decoração do componente
const mapStateToProps = state => ({tweet: state.tweet})
const mapDispatchToProps = dispatch => bindActionCreators({
    search
}, dispatch)
const Timeline = connect(mapStateToProps, mapDispatchToProps)(TimelineComponent)


// Exportação do Componente
export { Timeline }

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
