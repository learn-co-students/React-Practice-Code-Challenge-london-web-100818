import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {
  const sushi = props.sushis;
  
  return (
    <Fragment>
      <div className="belt">
        {sushi.map(sushi => 
          <Sushi 
            sushi={sushi} 
            handleEat={props.handleEat}
          />)
        }
        <MoreButton 
          handleShowMore={props.handleShowMore}
        />
      </div>
    </Fragment>
  )
}



export default SushiContainer