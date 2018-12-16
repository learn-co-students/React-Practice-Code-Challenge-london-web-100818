import React from 'react'

const MoreButton = ({ updateCurrentIndex }) => {
  return(
    <button onClick={updateCurrentIndex}>
      More sushi!
    </button>
  )
}

export default MoreButton