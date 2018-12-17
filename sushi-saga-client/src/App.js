import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    sushi: [],
    count: 4,
    eatenId: [],
    wallet: 50
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({
        sushi: sushi.splice(0,4)
      }))
  }

  payforSushi = (sushi) => {
    if (this.state.wallet >= sushi.price){
      this.setState({
        wallet: this.state.wallet - sushi.price
      })
    return true}
  }

  fetchSushi = () => 
     fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({
          count: this.state.count + 4,
          sushi: sushi.slice(this.state.count, this.state.count + 4)
      }))

  eatSushi = (sushi) => {
    if (this.payforSushi(sushi)) {
      const newEaten = this.state.eatenId.slice()
      newEaten.push(sushi.id)
      this.setState({
        eatenId: newEaten,
      })
    }
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          fetchSushi={this.fetchSushi}
          eatSushi={this.eatSushi}
          eatenId={this.state.eatenId}
        />
        <Table 
          wallet={this.state.wallet}
          eatenId={this.state.eatenId}
        />
      </div>
    );
  }
}

export default App;