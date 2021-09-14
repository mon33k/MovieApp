import React from "react"
import "../stylesheets/displayMovieList.css"
import MoviePage from "./MoviePage"

//Pass the movie clicked to MoviePage component
// We need to change this into a class component so that I can pass the movie using an onclick that will use the render() method to redirect to MoviePage


function DisplayMovieList({ data, handleClickImg }) {
    // console.log('just wanna check it even goes here', typeof handleClickImg)
    //console.log('props', this.props)
    function handleClick (e){
        // e.preventDefault()
        console.log(e.target)
    }

    return (
        <div className="datalist">
            {data ? data.map(e => (
                <div className="eachMovie" key={e.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="movie" onClick={handleClick}/> 
                    <div>{e.title}</div>
                </div>
            )) : " "}
        </div>
    )
}

export default DisplayMovieList