import React from 'react'

const AddMoney = (props) => {
  return(
    <form id="form" onSubmit={(event)=>props.handleSubmit(event)}  >
      <label>
        Add Some Money:
        <input onChange={(event)=>{props.addMoney(event.target.value)}}type="text" name="name" />
      </label>
    <input type="submit" value="Submit" />
  </form>
  )
}
export default AddMoney
