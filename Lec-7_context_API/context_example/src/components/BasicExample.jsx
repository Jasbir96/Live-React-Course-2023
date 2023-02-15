import React from 'react';
// object
const Context = React.createContext("");

export default function GrandParent() {
    let message = "Greeting from your ancestors";
    return (
        <Context.Provider value={message}>
            <h2>Grand Parent</h2>
            ⬇️
            <Parent></Parent>
        </Context.Provider>

    )
}
function Parent() {

    return (<>

        <h3> Parent</h3>
        ⬇️
        <Children></Children>


    </>
    )
}
function Children() {
    const message = React.useContext(Context);
    return (
        <>
            <h4>Children</h4>
            <div>Grand Parent say's {message}</div>

        </>
    )
}



