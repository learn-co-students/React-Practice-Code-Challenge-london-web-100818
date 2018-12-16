import React, { Component } from 'react'

class SushiWallet extends Component {
  
  state = {
    walletInput: ''
  }
  
  handleSubmit = event => {
    event.preventDefault()
    
    const { addMoneyToWallet } = this.props
    const { walletInput } = this.state

    let amountToAdd = parseInt(walletInput)    

    addMoneyToWallet(amountToAdd)

    event.target.reset()
  }

  handleChange = event => {
    this.setState({
      walletInput: event.target.value
    })
  }

  render() {
    const { handleSubmit, handleChange } = this
    
    return(
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
        />
        <button>Add Money!</button>
      </form>
    )
  }
}

export default SushiWallet