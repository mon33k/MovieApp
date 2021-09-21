import React from "react"
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Carousel } from "react-bootstrap";
import "../stylesheets/displayMovieSlider.css"

const DisplayMovieSlider = ({ data }) => {

    //needs to have a handle click maybe passed as props so that when you click on a movie it will go to that movie page

    return (
        <div>
            <Carousel fade>
                {data.map(movieItem => (
                    <Carousel.Item>
                        <img
                            className="img-thumbnail"
                            src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>{movieItem.original_title}l</h3>
                            <p>{movieItem.overview}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    )
}

export default DisplayMovieSlider