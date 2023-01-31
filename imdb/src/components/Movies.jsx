import React, { useEffect, useState } from 'react';
// import Image from "./image.jpg";
import axios from "axios";
import { Oval } from "react-loader-spinner";
function Movies() {
    let [movies, setMovies] = useState([]);

    useEffect(function () {
        (function () {
            axios
                .get
                ("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=1")
                .then((res) => {
                    // console.table(res.data.results);
                    setMovies(res.data.results);
                })
        })()
    }, [])

    return (
        <div className="mt-8">
            <div className="mb-8
            font-bold text-2xl text-center
            "
            >Trending Movies</div>
            <div className="flex 
            flex-wrap
            justify-center
            ">
                {
                    movies.length == 0 ? <Oval
                        height="80"
                        width="80"
                        radius="9"
                        color="gray"
                        secondaryColor='gray'
                        ariaLabel="loading"

                    /> :
                        movies.map((movie) => {
                            return <div key={movie.id}
                                className="
                bg-center bg-cover    
                w-[160px]
                h-[30vh]
                md: h-[40vh]
                md:w-[180px]
                m-4
                rounded-xl
                hover:scale-110
                duration-300
                 flex items-end 
                "
                                style={{
                                    backgroundImage:
                                        `url(
                                    https://image.tmdb.org/t/p/original/t/p/w500/${movie.backdrop_path})`
                                }}
                            >
                                <div
                                    className="
                    font-bold text-white
                bg-gray-900 bg-opacity-60
                p-2
                text-center
                w-full
                rounded-b-xl
                "> {movie.title || movie.name}</div>
                            </div>
                        })
                }









            </div>
        </div>
    )
}

export default Movies