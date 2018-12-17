import React, { Fragment } from 'react';

const SushiWallet = (props) => {

    return(
        <form onSubmit={props.addFunds}>
            <label>Amount:</label>
            <input type="number" name="amount"></input>
            <button type="submit">Add funds</button>
        </form>
    )
}

export default SushiWallet;