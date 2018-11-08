// Importação de dependências
import React, { Component } from 'react';

// Importação de componentes
import Routes from './routes'

// Definição do componente principal do App
class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

// Exportare componente App
export default App;
