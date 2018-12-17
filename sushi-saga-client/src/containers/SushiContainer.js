import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import App from '../App';
const SushiContainer = ({sushis, handleChange, eatenSushis, handleC}) => {
  
  let idx1 = 0
  let idx2 = 4
  const sushiSection = sushis.slice(idx1, idx2)

  
  return (
    <Fragment>
      <div className="belt">
      
        {sushiSection.map(sushi => 
        
        <Sushi key={sushi.id} sushi={sushi} eatenSushis={eatenSushis} handleClick={handleC}/>
        )}
          
        
        <MoreButton handleClick={handleChange}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer