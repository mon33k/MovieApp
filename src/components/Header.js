import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import Search from "./Search"

const Header = () => (
    <>
        <Container>
            <Row>
                <Col>Menu</Col>
                <Col>Logo</Col>
                <Col>
                    <Search/>
                </Col>
            </Row>

        </Container>
     


    </>
)

export default Header