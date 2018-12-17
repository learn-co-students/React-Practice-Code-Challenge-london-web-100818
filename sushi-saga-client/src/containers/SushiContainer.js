import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const handleClick = () => {
    return <div></div>
  }

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi
            .map(sushi => <Sushi 
              sushi={sushi} 
              eatSushi={props.eatSushi}
              eatenId={props.eatenId}
            />)
        }
        <MoreButton fetchSushi={props.fetchSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer