import React, { useEffect, useState } from 'react'

function UseStateEdgeCase() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [])

    return (
        <>
            <div>UseStateExample</div>
            <p> Count:{count}</p>
            <button onClick={() => {
                setCount((count) => count + 1);
            }}>increment</button>
        </>
    )
}

export default UseStateEdgeCase