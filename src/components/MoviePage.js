import React from "react"
import "../stylesheets/moviePage.css"

const MoviePage = (props) => {
  
    console.log("props in movie page", props)
    // let movieData = {}
    // if(props.history.location) {
    //     movieData = props.history.location.state.state.movieData
    //     console.log(movieData)
    // }

    return(
        <div className="moviePage-container">
            Movie Page
            {/* {movieData.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt="film" className="movie-image"/> : <img src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : "https://afridocs.net/wp-content/uploads/2017/07/500x735blank.png"} alt="film" className="movie-image"/>}
            <div>{movieData.title}</div>
            <p>{movieData.overview}</p>
            <div>Release Date: {movieData.release_date}</div> */}
        </div>
    )
}

export default MoviePage