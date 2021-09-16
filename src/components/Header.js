import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import Search from "./Search"

const Header = ({getData, movieData}) => {

    // console.log("props in header ", getData)
    return (<>
        <Container>
            <Row>
                <Col>Menu</Col>
                <Col>Logo</Col>
                <Col>
                    <Search getData={getData}/>
                </Col>
            </Row>

        </Container>


    </>)
}

export default Header