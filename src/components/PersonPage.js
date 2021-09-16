import React from 'react';

const PersonPage = (props)=> {
    console.log("person page props ", props.location)
    return(
        <div>Person Page Here
            <img src={`https://image.tmdb.org/t/p/w500${props.location.state.state.movieData.profile_path}`} />
        </div>
    )
}

export default PersonPage