import React from "react";

function CharacterInfo(props) {
const {films} = props




    return (
        <React.Fragment>
            {films.map((film, idx) => {
                return<p key={idx}>{film}</p>
            })}
        </React.Fragment>

    )
}

export default CharacterInfo