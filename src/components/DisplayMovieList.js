import React from "react"
import "../stylesheets/displayMovieList.css"
// import MoviePage from "./MoviePage"
import { withRouter } from 'react-router-dom'

//Pass the movie clicked to MoviePage component
// We need to change this into a class component so that I can pass the movie using an onclick that will use the render() method to redirect to MoviePage


class DisplayMovieList extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }



    handleClick(e, data) {
        e.preventDefault()
        if(data.media_type === "person") {
            this.props.getClickedItem(data)
            this.props.history.push(`/actor/${e.target.id}`, { state: { movieData: data }});
        } else if(data.media_type === "movie") {
            this.props.getClickedItem(data)
            this.props.history.push(`/movie/${e.target.id}`, { state: { movieData: data }});
        }

    }

    render() {
        const { data } = this.props

        return (
            <div className="datalist">
                {data ? data.map(movie => (
                    <div className="eachMovie" key={movie.id + data.length}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://afridocs.net/wp-content/uploads/2017/07/500x735blank.png"} alt="movie" id={movie.id} onClick={(e) => this.handleClick(e, movie)} />
                        <div>{movie.title}</div>
                    </div>
                )) : " "}
                
            </div>
        )
    }
}

export default withRouter(DisplayMovieList)