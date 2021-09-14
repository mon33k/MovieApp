import React from "react"
import "../stylesheets/displayMovieList.css"

function DisplayMovieList({ data }) {
    console.log('just wanna check it even goes here')


    return (
        <div className="datalist">
            {data ? data.map(e => (
                <div className="eachMovie" key={e.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="movie" /> 
                    <div>{e.title}</div>
                </div>
            )) : " "}
        </div>
    )
}

export default DisplayMovieList