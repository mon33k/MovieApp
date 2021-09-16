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
    getActorClicked = () => {
        if(this.props.itemClicked) {
            console.log(this.props.itemClicked)
        }
    }




    render(){
        // props need to be structred better from App.js because its replacing the value for movieData when search returns multiple datas 
        console.log("props in main ", this.props)
        // Find out why the component would only render if I had it in that format line 24
        return(
            <div>
                <Switch>
                    <Route path="/search/:query">
                        <DisplayMovieList data={this.props.movieData} getClickedItem={this.props.getClickedItem} />
                    </Route>
                    <Route path="/movie/:id" component={MoviePage} clickedItem={this.props.clickedItem != null ? this.props.clickedItem : ""} /> 
                    <Route path="/actor/:id" component={PersonPage} clickedItem={this.props.clickedItem != null ? this.props.clickedItem : ""} />
                    <Route exact path="/" component={LandingPage}/>
                        
                </Switch>
            </div>
        )
    }
}

export default Main

