import React from "react";

export function Task ({ task, deleteTask }) {

    return (
        <div className="task">
            <h3>
                {task.text}
                <i
                    className="fa-sharp fa-solid fa-xmark"
                    style={{color: "red"}}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}