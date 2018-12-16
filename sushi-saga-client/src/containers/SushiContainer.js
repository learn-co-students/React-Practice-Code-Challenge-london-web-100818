import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushis, currentIndex }) => {
  const fourSushiCards = sushis
    .slice(currentIndex, currentIndex + 4)
    .map(sushi => {
      return(
        <Sushi
          key={sushi.id}
          sushi={sushi}
        />
      )
    })

  return (
    <Fragment>
      <div className="belt">
        {fourSushiCards}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer