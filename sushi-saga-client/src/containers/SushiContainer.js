import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushis, currentIndex, eatSushi, eatenSushi, updateCurrentIndex }) => {
  const fourSushiCards = sushis
    .slice(currentIndex, currentIndex + 4)
    .map(sushi => {
      return(
        <Sushi
          key={sushi.id}
          sushi={sushi}
          eatSushi={() => eatSushi(sushi.id)}
          eatenSushi={eatenSushi}
        />
      )
    })

  return (
    <Fragment>
      <div className="belt">
        {fourSushiCards}
        <MoreButton updateCurrentIndex={updateCurrentIndex} />
      </div>
    </Fragment>
  )
}

export default SushiContainer