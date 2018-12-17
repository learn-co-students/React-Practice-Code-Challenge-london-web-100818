import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  constructor() {
    super()
      this.handleShowMore = this.handleShowMore.bind(this)
      this.handleEat = this.handleEat.bind(this)
      this.state = {
        sushis: [],
        showSushiStart: 0,
        showSushiEnd: 4,
        sushiEaten: [],
        remainingMoney: 50
      }
  }

  handleShowMore(){
    const startShow = this.state.showSushiStart + 4;
    const endShow = this.state.showSushiEnd + 4;
    
    this.setState({
      showSushiStart: startShow,
      showSushiEnd: endShow
    })
  }

  handleEat = (sushi)=> {
    let plateCount  = this.state.sushiEaten.concat(sushi)
    let moneyCount = this.state.remainingMoney - sushi.price
    
    if (moneyCount > 0) {
     (sushi.eaten = true).persist
    } else {
      alert('You need more money before you can eat anymore.')
      moneyCount = 0
    }
      
      this.setState({
        sushiEaten: plateCount,
        remainingMoney: moneyCount
      })
  }

  render() {
    const sushis = this.state.sushis.slice(this.state.showSushiStart, 
    this.state.showSushiEnd);

    return (
      <div className="app">
        <SushiContainer 
          sushis={sushis} 
          handleShowMore={this.handleShowMore}
          handleEat={this.handleEat} 
        />
        <Table 
          sushiEaten={this.state.sushiEaten}
          remainingMoney={this.state.remainingMoney}
        />
      </div>
    );
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => 
        {this.setState({
          sushis: data
        })}
      )
  }

}

export default App;