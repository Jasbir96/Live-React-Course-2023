import React from 'react'

function Pagination() {
    return (
        <div className="flex 
        justify-center
        my-4
        ">
            <div
                className='border-2
                p-2
                border-r-0
                rounded-l-xl
                border-blue-400
                '
            >Previous</div>
            <div
                className="border-2
                p-2
                 border-r-0
                 border-blue-400
                "
            > 1</div>
            <div
                className="border-2
                p-2
                rounded-r-xl
                border-blue-400
                "
            >Next</div>

        </div>
    )
}

export default Pagination;