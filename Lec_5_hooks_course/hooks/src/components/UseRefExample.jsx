import React, { useState, useRef } from 'react'

function UseRefExample() {
    const [val, setVal] = useState("");
    const refVar = useRef(null);
    const focusInput = () => {
        refVar.current.focus();
    }
    return (
        <>
            <div>UseRefExample</div>
            <input type="text"
                value={val}
                onChange={(e) => { setVal(e.target.value) }}
                ref={refVar}
            ></input>
            <button onClick={() => {
                alert(val)
                setVal("");
            }}>Alert content</button>
            <button onClick={focusInput}>Focus</button>
        </>
    )
}

export default UseRefExample