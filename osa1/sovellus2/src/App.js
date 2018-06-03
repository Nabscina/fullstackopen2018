import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
  }
  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={() => this.setState({hyvä : this.state.hyvä + 1})}>hyvä</button>
        <button onClick={() => this.setState({neutraali : this.state.neutraali + 1})}>neutraali</button>
        <button onClick={() => this.setState({huono : this.state.huono + 1})}>huono</button>
        <h2>Statistiikka</h2>
        <p>hyvä {this.state.hyvä}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
      </div>
    );
  }
}

export default App;
