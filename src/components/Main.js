import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import DisplayMovieList from "./DisplayMovieList";
import MoviePage from "./MoviePage"
import LandingPage from "./LandingPage"

class Main extends React.Component {
   constructor(props){
        super(props)
        this.handleClickImage = this.handleClickImage.bind(this)
    }
    
    handleClickImage = (movie) => {
        //console.log("movie in main ", `/movie/${movie.id}`)
       return(
            <MoviePage props={movie}/>
        ) 
           
        
    }



    render(){

        // console.log("props in Main", this.props.movieData)
        // Having trouble displaying  component and changing url 
        return(
            <div>
                <Switch>
                    <Route path="/displayall">
                        <DisplayMovieList data={this.props.movieData} handleClickImg={this.handleClickImage}/>
                    </Route>
                    <Route path="/movie/:id">
                        <MoviePage/>
                    </Route>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>

                </Switch>
            </div>
        )
    }
}

export default Main