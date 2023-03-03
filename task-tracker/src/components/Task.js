import React from "react";

export function Task ({ task, showEditTask, deleteTask, toggleReminder, toggleEditFormTask, pickChosenTask }) {

    const handleToggleReminder = () => {
        !showEditTask &&toggleReminder(task.id)
    };


    const handleEdit = () => {
        toggleEditFormTask();
        pickChosenTask(task);
        return task
    };

    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={handleToggleReminder}
        >
            <h3>
                {task.text}
                <i
                    className="fa-sharp fa-solid fa-wand-magic"
                    style={{color: "lightgreen"}}
                    onClick={handleEdit}
                />
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