import React, { Fragment } from 'react'

const Table = (props) => {
  let array
  const renderPlates = () => {
    array = new Array(props.plates)
    array.fill(0, 0, array.length)
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">


            {renderPlates(props)}

        </div>
      </div>
    </Fragment>
  )
}

export default Table
