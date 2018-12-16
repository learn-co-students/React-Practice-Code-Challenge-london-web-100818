import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    currentIndex: 0,
    eatenSushi: [],
    currentBudget: 100
  }

  eatSushi = (id, price) => {
    const { eatenSushi, currentBudget } = this.state

    let newBudget = currentBudget - price

    if(!eatenSushi.includes(id) && newBudget > 0) {
      this.setState({
        eatenSushi: [...eatenSushi, id],
        currentBudget: newBudget
      })
    }
  }

  updateCurrentIndex = () => {
    const { currentIndex } = this.state

    let newIndex
    
    currentIndex === 96 ? newIndex = 0 : newIndex = currentIndex + 4

    this.setState({
      currentIndex: newIndex
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
    const { eatSushi, updateCurrentIndex } = this
    const { sushis, currentIndex, eatenSushi, currentBudget } = this.state
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          currentIndex={currentIndex}
          eatSushi={eatSushi}
          eatenSushi={eatenSushi}
          updateCurrentIndex={updateCurrentIndex}
        />
        <Table
          currentBudget={currentBudget}
          eatenSushi={eatenSushi}
        />
      </div>
    );
  }
}

export default App;