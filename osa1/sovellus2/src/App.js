import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0.0,
      positiivisia: 0.0
    }
    this.keskiarvo = this.keskiarvo.bind(this);
    this.positiivisia = this.positiivisia.bind(this)
    this.hyva = this.hyva.bind(this);
    this.neutraali = this.neutraali.bind(this);
    this.huono = this.huono.bind(this);
  }

  keskiarvo() {
    return (this.state.hyva - this.state.huono) / (this.state.hyva + this.state.neutraali + this.state.huono)
  }

  positiivisia() {
    return 100 * (this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono))
  }

  hyva = () => {
    this.setState({ hyva: this.state.hyva + 1 })
  }

  neutraali = () => {
    this.setState({ neutraali: this.state.neutraali + 1 })
  }

  huono = () => {
    this.setState({ huono: this.state.huono + 1 })
  }

  render() {
    var ka = this.keskiarvo()
    var pos = this.positiivisia()
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={this.hyva}>hyvä</button>
        <button onClick={this.neutraali}>neutraali</button>
        <button onClick={this.huono}>huono</button>
        <h2>Statistiikka</h2>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
        <p>keksiorava {ka}</p>
        <p>positiivisia {pos} %</p>
      </div>
    );
  }
}

export default App;
