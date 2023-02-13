import React, { useState } from 'react';

function UseMemo() {
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);
    return (
        <>
            <div>UseStateExample</div>
            <p> Count:{count}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>increment</button>

            <h2>Another button</h2>
            <p> Count:{count2}</p>
            <button onClick={() => {
                randomCalc();
                setCount2(count2 + 1);
            }}>increment</button>


        </>
    )
}

function randomCalc() {
    let futureTime = Date.now() + 2000;
    while (Date.now() < futureTime) {
    }
}

export default UseMemo