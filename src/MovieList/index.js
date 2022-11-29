import React from "react"
import './MovieList.css'
function MovieList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export { MovieList };