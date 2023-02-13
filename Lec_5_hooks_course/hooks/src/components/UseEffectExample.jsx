import React, { useState, useEffect, useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "incby5":
            return state + 5;
        case "decby5":
            return state - 5;
        case "incUser":
            return Number(state) + Number(action.payload)
        default:
            return state;
    }


}
function UseEffectExample() {
    console.log("before render")
    // complex -> forms 
    const [count, dispatch] = useReducer(reducer, 0);
    //useState
    const [val, setVal] = useState("");
    //excutes the function -> after render
    // useEffect(() => {
    //     console.log("effect");
    // })

    //excutes the function -> afterr first ender only once -> get data
    // useEffect(() => {
    //     console.log("connect");
    //     return function(){
    //         console.log("disconnect");
    //     }
    // },[]);
    //excutes the function -> afterr first ender only once+ whenever the 
    // dependecy changes
    useEffect(() => {
        console.log("effect");
        return function () {
            console.log("cleanup");
        }
    }, [count]);






    return (
        <>
            <div>UseReducerExample</div>
            {/* counter */}
            <p> Count:{count}</p>
            <button onClick={() => {
                dispatch({ type: "inc" })
            }}>increment</button>
            <button
                onClick={() => {
                    dispatch({ type: "dec" })
                }}
            >Decrement</button>

            <button
                onClick={() => {
                    dispatch({ type: "incby5" })
                }}

            >Inc by 5</button>
            <button
                onClick={() => {
                    dispatch({ type: "decby5" })
                }}
            > Dec by 5</button>
            <input type="text" value={val} onChange={(e) => {
                setVal(e.target.value);
            }} />
            <button
                onClick={() => {
                    dispatch({
                        payload: val,
                        type: "incUser"
                    })
                }}
            >increment acc to user</button>
            {console.log("between render")};

        </>


    )
}

export default UseEffectExample