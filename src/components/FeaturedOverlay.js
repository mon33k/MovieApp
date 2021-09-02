import React from "react";
import "../stylesheets/featuredOverlay.css";
import Carousel from "react-bootstrap/Carousel";


const FeaturedOverlay = () => (
    <div className="overlay-container">
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="images/spiderman.jpg"
                    alt="One"
                />
                <Carousel.Caption>
                    <h3>Label for first slide</h3>
                    <p>Sample Text for Image One</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="images/starwars.jpg"
                    alt="Two"
                />
                <Carousel.Caption>
                    <h3>Label for second slide</h3>
                    <p>Sample Text for Image Two</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default FeaturedOverlay;