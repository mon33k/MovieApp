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
        console.log('e ==> ', e.target.id)
        fetch(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=2915ebad2c3b22b57b07f08729360d20&append_to_response=videos,images`)
        .then(response => response.json())
        .then(data => {
            // console.log('data details ✨', data)
            this.props.history.push(`/movie/${e.target.id}`, { state: { movieData: data }}); 
        })
        
    }

    render() {
        const { data } = this.props
        // console.log("render movie list details ", data)
        return (
            <div className="datalist">
                {data ? data.map(movie => (
                    <div className="eachMovie" key={movie.id + data.length}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://afridocs.net/wp-content/uploads/2017/07/500x735blank.png"} alt="movie" id={movie.id} onClick={this.handleClick} />
                        <div>{movie.title}</div>
                    </div>
                )) : " "}
                
            </div>
        )
    }
}

export default withRouter(DisplayMovieList)