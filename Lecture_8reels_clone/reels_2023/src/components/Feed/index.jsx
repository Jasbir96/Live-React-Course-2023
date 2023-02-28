import React from 'react'
import NavBar from './NavBar'
import "./feed.css"
import UploadReels from './UploadReels'
function Feed() {
    return (
     <div className='feed_container'>
            {/* <h1>Feeds</h1> */}
            <NavBar></NavBar>
            <UploadReels></UploadReels>
     </div>
    )
}
export default Feed