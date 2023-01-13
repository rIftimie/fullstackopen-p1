import React from "react";

function Part(props) {
    return (
        <div>
            <p key={props.item.number}>
                Part {props.item.number} - {props.item.title}
                <br />
                Exercise: {props.item.exercises}
            </p>
        </div>
    );
}

export default Part;
