import React from "react";

export function Task ({ task, deleteTask, toggleReminder }) {

    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <h3>
                {task.text}
                <i
                    className="fa-sharp fa-solid fa-xmark"
                    style={{color: "red"}}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p>{task.day} at {task.time}</p>
        </div>
    )
}