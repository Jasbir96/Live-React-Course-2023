import React, { useEffect, useState } from 'react'
import axios from "axios";
function Banner() {
    let [bannerMovie, setBanner] = useState("");

    useEffect(function () {
        (function () {
            axios
                .get
                ("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=3")
                .then((res) => {
                    console.table(res.data.results);
                    setBanner(res.data.results[0]);
                })
        })()
    }, [])
    return (
        <>
            {
                bannerMovie == "" ? <h1>Loading</h1> :
                    <div className={`
                                    bg-[url(https://image.tmdb.org/t/p/w500/${bannerMovie.backdrop_path})] 
                    h-[40vh] md:h-[60vh]
            bg-center bg-cover
            flex items-end 
            `}
                    >
                        {console.log(`https://image.tmdb.org/t/p/original/t/p/w500/${bannerMovie.backdrop_path}`)}
                        <div
                            className="
                    text-xl 
                    md:text-3xl
                    text-white
                bg-gray-900 bg-opacity-60
                p-4
                text-center
                w-full
                "
                        >{bannerMovie.title}</div>
                    </div>
            }


        </>
    )
}

export default Banner;