import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    currentIndex: 0
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
    const { sushis, currentIndex } = this.state
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          currentIndex={currentIndex}
        />
        <Table />
      </div>
    );
  }
}

export default App;