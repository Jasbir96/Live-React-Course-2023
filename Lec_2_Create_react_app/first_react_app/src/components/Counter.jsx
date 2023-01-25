// rfce

import React, { Component, useState } from 'react'
function Counter() {
    // pass intial val -> var , setter fn
    let [count, setCount] = useState(0);
    const incrementCounter = () => {
        console.log("incrementCounter ran");
        setCount(count + 1);
    }
    const decrementCounter = () => {
        console.log("decrementCounter ran");
        setCount(count - 1);
    }
    // console.log("I ran");
    return (
        <>
            <button onClick={incrementCounter}> +</button>
            <p>{count}</p>
            <button onClick={decrementCounter}> - </button>
        </>
    )
}

export default Counter