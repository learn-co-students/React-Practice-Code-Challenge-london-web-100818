import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import SushiWallet from './containers/AddMoney'
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: [],
    money: 100,
    plates: 0,
    additionalmoney: 0,
    newSushis: []
  }
  componentDidMount () {
    this.getSushi()
  }
  getSushi = () => {
    let i=0
    fetch(API)
    .then(res=>res.json())
    .then(json=>{json.map(sushi=>{
      sushi.eaten=false
      sushi.id= i
      i++
    })
      this.setState({sushis: json})
    })
  }


  changeStateSushi = (newSushi) => {
    if(this.state.sushis.length===0){
      console.log("hello")
      return this.setState({
        sushis: this.state.newSushis,
        newSushis: []
      })
    }
    let array=[]
    this.state.sushis.slice(0,4).forEach(sushi=>{
      if(sushi.eaten===false){
        array.push(sushi)
      }
    })
    this.setState({
      sushis: newSushi,
      newSushis: this.state.newSushis.concat(array)
    })
  }


  changeStatePlateAndMoney = (price,sushi) => {
    if(this.state.money-price>=0 && sushi.eaten===false){
        const index = this.state.sushis.indexOf(sushi)
        sushi.eaten=true
        this.state.sushis.splice(index,1,sushi)
      this.setState(prevState => {
       return {
         plates: prevState.plates+1,
         money: prevState.money-price,
         sushis: this.state.sushis
       }
     })
    }else{}
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      money: this.state.money+this.state.additionalmoney
    })
  document.getElementById("form").reset();

  }
  addMoneyToTheWallet = (moremoney) =>{
    this.setState({
      additionalmoney: parseInt(moremoney)
    })

  }
  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushis} funct={this.changeStateSushi} plateAndMoney={this.changeStatePlateAndMoney} pushIntoArray={this.pushIntoArray}/>
        <Table money={this.state.money} plates={this.state.plates}/>
        <SushiWallet addMoney={this.addMoneyToTheWallet} handleSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

export default App;
