import React, { Fragment } from 'react'
import SushiContainer from '../containers/SushiContainer'
import App from '../App.js'


const Sushi = ({sushi, handleClick, eatenSushis}) => {
  
  return (
 
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => {handleClick(sushi); 
            }} >
           {console.log(eatenSushis) }
        {  eatenSushis.find(s => s.id === sushi.id) ? null : <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi