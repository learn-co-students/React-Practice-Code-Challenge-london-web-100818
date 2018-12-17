import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    idx1: 0,
    idx2: 4,
    eatenSushi: [],
    spendingMoney: 200
    
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(res => {
        this.setState({
          sushis: res
          })
        })

  }

 


  eatSushi = (item) => {
    console.log(item.price)
    if (item.price < this.state.spendingMoney) {
      this.setState({
          eatenSushi: [...this.state.eatenSushi, item],
          spendingMoney:  this.state.spendingMoney - item.price
        })
      }

  }

  shiftPage = () => {
    
    this.setState({
      idx1: this.state.idx1 + 4,
      idx2: this.state.idx2 + 4
    });
    
  }



  render() {
    const sushisList = this.state.sushis.slice(this.state.idx1, this.state.idx2)
    const eatenSushis = this.state.eatenSushi
    const spendingMoney = this.state.spendingMoney
    return (
      <div className="app">
        <SushiContainer  eatenSushis={eatenSushis} sushis={sushisList} handleChange={this.shiftPage}  handleC={this.eatSushi}/>
        <Table  eatenSushis={eatenSushis} money={spendingMoney} />
      </div>
    );
  }
}

export default App;