import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=>props.changeState(props.sushi.slice(4))}>
            More sushi!
          </button>
}

export default MoreButton
