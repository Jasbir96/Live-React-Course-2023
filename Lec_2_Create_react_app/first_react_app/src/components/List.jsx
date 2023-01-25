import React from 'react'

function List(props) {
    let items = ["pen", "pencil", "eraser"];
    // array of html
    // console.log(arrOfHtml)
    // convert -> array of data -> array of html 
    return (
        <>
            <br />
            ```````````````````````````````
            <h2>list</h2>
            <ul>
                {/* dynamic -> lists */}
                {items.map((item, idx) => {
                    return <li key={idx}> {item}</li>
                })}
            </ul>
        </>
    )
}

export default List;