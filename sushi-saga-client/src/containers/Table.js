import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet';

const Table = ({ currentBudget, eatenSushi, updateBudget }) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${currentBudget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(eatenSushi)}
        </div>
      </div>
      <SushiWallet addMoneyToWallet={updateBudget} />
    </Fragment>
  )
}

export default Table