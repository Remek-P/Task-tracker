import React from "react";

export function Button ({ color, text, showAddTaskForm }) {

    return (
        <button
            className="btn"
            style={{backgroundColor: color}}
            onClick={showAddTaskForm}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "blue",
    text: "????"
}


