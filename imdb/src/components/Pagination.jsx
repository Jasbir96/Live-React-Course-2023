import React, { useState } from 'react'

function Pagination(props) {
    let { pageNum, onNext, onPrev } = props;
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
                onClick={onPrev}
            >Previous</div>
            <div
                className="border-2
                p-2
                 border-r-0
                 border-blue-400
                "
            > {pageNum}</div>
            <div
                className="border-2
                p-2
                rounded-r-xl
                border-blue-400
                "
                onClick={onNext}
            >Next</div>

        </div>
    )
}

export default Pagination;