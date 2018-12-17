import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';


// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    sushi: [],
    count: 0,
    wallet: 50,
    eaten:[]
  }

  handleMoreSushi = () => {
    let newCount = this.state.count + 4
    if(newCount === 100){
      newCount = 0;
    }
    this.setState({
      count: newCount
    })
  }

  handleEatSushi = (id) => {
    let newArray = this.state.sushi.slice()
    let toRemove = newArray.find((sushi) => sushi.id === id)
    if(this.state.wallet - toRemove.price >= 0 && !toRemove.eaten){
      const newWallet = this.state.wallet - toRemove.price
      let newEaten = this.state.eaten.slice()
      newEaten.push(1)
      toRemove.eaten = true
      this.setState({
        sushi: newArray,
        wallet: newWallet,
        eaten: newEaten
      })
    }
  }

  handleAddFunds = (e) => {
    e.preventDefault()
    const newWallet = this.state.wallet + parseInt(e.target.amount.value)
    this.setState({
      wallet: newWallet
    })
  }
 
  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => {
        this.setState({
          sushi
        })
      })
  }

  render() {
    const {sushi, count, wallet, eaten} = this.state;
    return (
      <div className="app">
        <SushiContainer sushi={sushi} 
          count={count} 
          moreSushi={this.handleMoreSushi}
          eatSushi={this.handleEatSushi}/>
        <Table wallet={wallet} eaten={eaten}/>
        <SushiWallet addFunds={this.handleAddFunds}/>
      </div>
    );
  }
}

export default App;