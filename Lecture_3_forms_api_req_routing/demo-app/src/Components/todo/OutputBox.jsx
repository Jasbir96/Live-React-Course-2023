import React from 'react'

function OutputBox(props) {
    
    
    return (
        <div className="output_container">
            <ul>
                {/* dynamic -> lists */}
                {props.list.map((item, idx) => {
                    return <li key={idx}> {item}</li>
                })}
            </ul>
        </div>
    )
}

export default OutputBox