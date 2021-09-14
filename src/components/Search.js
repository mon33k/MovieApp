import React from "react";
import Form from "react-bootstrap/Form";
import DisplayMovieList from "./DisplayMovieList";
// import DisplayMovieList from "./DisplayMovieList"
// Get user input for movie title 
//User input is then put into the api call and json is going to have a movie id
// Using a movie id there is an appending api call that will give the movie details


class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchedMovie: " ",
        }
    }

    handleSearchBar = (e) => {
        this.setState({
            searchedMovie: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // This is where you will call your function that takes the user input as a query for the api call
        this.getSearchedMovie()
    }

    getSearchedMovie = () => {
        if (this.state.searchedMovie) {
            let filterMovieInput = this.state.searchedMovie.split(" ").filter(word => word.length > 0).join('+')

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=2915ebad2c3b22b57b07f08729360d20&query=${filterMovieInput}`)
                .then(res => res.json())
                .then((data) => {
                    if(data.results) {

                        console.log("Search component props ", this.props.getData)

                        this.props.getData(data.results)
                         
                    } 
                })
                .catch(err => console.log(err))
        } 
    }

    

    componentDidMount() {
    }


    render() {
        // console.log('render ',this.state.movieDataArr)
        return (
        <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Control type="text" placeholder="Search for Movie" value={this.state.searchedMovie} onChange={this.handleSearchBar} />
               
            </Form>
            {/* {this.state.movieDataArr.length > 0 ? <DisplayMovieList data={this.state.movieDataArr} /> : " "} */}
        </>
        )
    }

}

export default Search