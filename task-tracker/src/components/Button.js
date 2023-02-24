import React from "react";

export function Button ({ color, text }) {

    const handleClick = () => {
        console.log("clicking")
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


