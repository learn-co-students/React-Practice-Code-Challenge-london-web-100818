import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    currentIndex: 0,
    eatenSushi: []
  }

  eatSushi = (id) => {
    const { eatenSushi } = this.state

    this.setState({
      eatenSushi: [...eatenSushi, id]
    })
  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  componentDidMount() {
    this.getSushis()
  }

  render() {
    const { eatSushi } = this
    const { sushis, currentIndex, eatenSushi } = this.state
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          currentIndex={currentIndex}
          eatSushi={eatSushi}
          eatenSushi={eatenSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;