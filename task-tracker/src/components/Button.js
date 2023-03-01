import React from "react";

export function Button ({ color, text, toggleAddTaskForm, toggleEditTaskForm }) {

    const handleClick = () => {
        toggleAddTaskForm();
        toggleEditTaskForm()
    }

    return (
        <button
            className="btn"
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "blue",
    text: "????"
}


