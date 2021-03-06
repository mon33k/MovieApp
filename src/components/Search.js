import React from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom"
import {Button, Col, Row} from "react-bootstrap"
import "../stylesheets/header.css"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: ""
        }
    }

    handleSearchBar = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.getUserSearchQuery()
    }

    getUserSearchQuery = () => {
        if (this.state.searchQuery) {
            const encodedQueryStr = this.state.searchQuery.split(" ").filter(word => word.length > 0).join('+')
            const urls = {
                getMulti: `https://api.themoviedb.org/3/search/multi?api_key=2915ebad2c3b22b57b07f08729360d20&query=${encodedQueryStr}`,
                // getMovie: `https://api.themoviedb.org/3/search/movie?api_key=2915ebad2c3b22b57b07f08729360d20&query=${encodedQueryStr}`
            }
            
            Promise.all(Object.keys(urls).map((key) =>
                fetch(urls[key])
                    .then((res) => res.json())
                    .then(data => {
                            if (data.results) {
                                this.props.getData([...data.results])
                                this.props.history.push(`/search/${encodedQueryStr}`) // needed to use withRouter from react-router-dom 
                            }
                        }
                    )
            ))
                .catch(error => console.log(`Error in promises ${error}`)) 

        }
    }



    componentDidMount() {
    }


    render() {
        return (
            <Row>
                <Col>
                    <Form className="search-bar" onSubmit={this.handleClick}>
                        <Form.Control type="text" placeholder="Search for a Movie, TV Show or Actor" value={this.state.searchQuery} onChange={this.handleSearchBar} />
                        <Button onClick={this.handleClick} variant="secondary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }

}

export default withRouter(Search)