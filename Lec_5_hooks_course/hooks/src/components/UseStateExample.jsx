import React, { useState, useEffect } from 'react';

function UseStateExample() {
    const [count, setCount] = useState(0);

    
    return (
        <>
            <div>UseStateExample</div>
            <p> Count:{count}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>increment</button>
        </>
    )
}

export default UseStateExample;