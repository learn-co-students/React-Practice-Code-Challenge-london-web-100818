import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.slice(0,4).map(singleSushi => <Sushi sushi={singleSushi} plateAndMoneyCount={props.plateAndMoney} /> )

        }
        <MoreButton changeState={props.funct} sushi={props.sushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
