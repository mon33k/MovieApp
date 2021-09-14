import React from "react"
import "../stylesheets/displayMovieList.css"

function DisplayMovieList (data) {
    console.log('just wanna check it even goes here')
    console.log(data.data)
   // console.log(peepee)


    return(
        <div className="datalist">
            {data.data ? data.data.map(e => (
                <div key={e["id"]}>{e["original_title"]}</div>
            )) : " "}
        </div>
    )
}

export default DisplayMovieList