import React, { useState } from 'react'
function InputBox(props) {
    const [valueofInput, setVal] = useState("");
    const addTask = () => {
        // console.log("add Task Executed");
        console.log("task to add", valueofInput);
        props.acceptNewTask(valueofInput);
        setVal("");

    }
    const setInputVal = (e) => {
        setVal(e.target.value)
    }
    return (
        <div className="input_container">
            {/* forms -> input  */}
            <input type="text"
                value={valueofInput}
                onChange={setInputVal}
            ></input>
            <button onClick={addTask}>+</button>
        </div>
    )
}

export default InputBox