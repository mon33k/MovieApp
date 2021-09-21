import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import DisplayMovieList from "./DisplayMovieList";
import DisplayMovieSlider from "./DisplayMovieSlider";

class LandingPage extends React.Component {
    constructor() {
        super()
        this.state ={
            popular: [],
            upcoming: [],
            topRated: [],
        }
    }

    getPopularMovies() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            this.setState({
                popular: data.results
            })
        })
    }

    getTopRatedMovies() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            this.setState({
                topRated: data.results
            })
        })
    }

    getUpcomingMovies() {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            this.setState({
                upcoming: data.results
            })
        })
    }

    componentDidMount() {
        this.getPopularMovies()
        this.getTopRatedMovies()
        this.getUpcomingMovies()
    }


    render() {
        return(
            <Container>
                <Row>
                    <Col> 
                    <h1>Popular:</h1> 
                        <DisplayMovieSlider data={this.state.popular} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>Top Rated</h1> 
                        <DisplayMovieSlider data={this.state.topRated} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>Upcoming</h1> 
                        <DisplayMovieSlider data={this.state.upcoming} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingPage


