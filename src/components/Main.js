import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import DisplayMovieList from "./DisplayMovieList";
import MoviePage from "./MoviePage"
import LandingPage from "./LandingPage"
import PersonPage from "./PersonPage"

class Main extends React.Component {
//    constructor(props){
//         super(props)
//         this.handleClickImage = this.handleClickImage.bind(this)
//     }
  



    render(){
        // props need to be structred better from App.js because its replacing the value for movieData when search returns multiple datas 
        console.log("should see all query results here ", this.props)
        // Find out why the component would only render if I had it in that format line 24
        return(
            <div>
                <Switch>
                    <Route path="/search/:query">
                        <DisplayMovieList data={this.props.movieData} />
                    </Route>
                    <Route path="/movie/:id" component={MoviePage}/> 
                    <Route path="/actor/:id" component={PersonPage} />
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>

                </Switch>
            </div>
        )
    }
}

export default Main


// <Route path="/movie/:id">
// <MoviePage />
// </Route>