import React from "react";

function Part({ item }) {
    return (
        <div>
            <p>
                Part - {item.name}
                <br />
                Exercise: {item.exercises}
            </p>
        </div>
    );
}

export default Part;
