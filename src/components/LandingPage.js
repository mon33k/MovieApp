import React from "react";
import {Container, Row, Col} from "react-bootstrap"

class LandingPage extends React.Component {

    getPopularMovies() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            console.log("popular ", data)
        })
    }

    getTopRatedMovies() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            console.log("top-rated ", data)
        })
    }

    getUpcomingMovies() {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2915ebad2c3b22b57b07f08729360d20&language=en-US&page=1")
        .then(res => res.json())
        .then(data => {
            console.log("upcoming", data)
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
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default LandingPage