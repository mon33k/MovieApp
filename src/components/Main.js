import React from "react";
import DisplayMovieList from "./DisplayMovieList";


class Main extends React.Component {
//    constructor(props){
//        super(props)
//    }
    




    render(){

        console.log("props in Main", this.props.movieData)

        return(
            <div>
                <DisplayMovieList data={this.props.movieData}/>
                    {/* {this.props.movieData != null ? this.props.movieData.map((e) => (
                        <div  key={e.id}>
                            <div>{e.title}</div>
                            <div>{e.overview}</div>
                        </div>
                    )) : ""} */}
                
            </div>
        )
    }
}

export default Main