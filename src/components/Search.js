import React from "react";
import Form from "react-bootstrap/Form";

// Get user input for movie title 
    // Add a set timeout and a cleartimeout() when user is finished typing
//User input is then put into the api call and json is going to have a movie id
// Using a movie id there is an appending api call that will give the movie details

const apiTestCall = fetch("https://api.themoviedb.org/3/movie/550?api_key=2915ebad2c3b22b57b07f08729360d20")
                        .then(response => response.json())
                        .then(data => console.log("hurr bitch", data))



class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchedMovie : "yea"
        }
    }

 searchBar = (e) => {
    console.log(e.target.value)
    // console.log(this.state.searchedMovie)
    // console.log(apiTestCall)
 }


 render() {
    return(
        <Form.Control type="text" placeholder="Search for Movie" onChange={this.searchBar}  />
    )
 }

}

export default Search