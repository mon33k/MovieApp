import React from "react";
import { Container, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap"
import Search from "./Search"
import "../stylesheets/header.css"
import HeaderLogo from "../stylesheets/logo/The_Movie_Source.svg"

const Header = ({ getData }) => {

    return (<>
        <Container fluid="md">
            <Row>
                <Navbar collapseOnSelect expand={false} variant="dark">
                    <Col>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Col>

                    <Col>
                        <Navbar.Brand href="/">
                            <img src={HeaderLogo} alt="film logo" className="header-logo" />
                        </Navbar.Brand>
                    </Col>
                    
                        <Search getData={getData} />
                </Navbar>
            </Row>
        </Container>

    </>)
}

export default Header