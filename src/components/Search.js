import React from "react";
import Form from "react-bootstrap/Form";


class Search extends React.Component {
    // constructor() {
    //     super()
    // }

 searchBar = (e) => {
     console.log(e.target.value)
 }


 render() {
    return(
        <Form.Control type="text" placeholder="Search for Movie" onChange={this.searchBar}  />
    )
 }

}

export default Search