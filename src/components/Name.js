import React from "react";

const Name = (props) => {
    return (
        <div className="name-container">
            <h3 key={props.name.birth_year}>{props.name.name}</h3>
            <p>Birth Year: {props.name.birth_year}</p>
        </div>
    )
}

export default Name;