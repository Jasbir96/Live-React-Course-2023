import React from 'react'
import Image from "./image.jpg";
import "./Banner.css"
function Banner() {
    return (
        <>
            <img src={Image} />
            <div className="banner-head
            ">
                <div
             className="bg-gray-900
             bg-opacity-40
            text-white
            text-2xl
            font-bold
            py-10
             text-center
            "
                >M3GAN

                </div>
            </div>

        </>
    )
}

export default Banner;