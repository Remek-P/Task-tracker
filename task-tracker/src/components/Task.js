import React from "react";

export function Task ({ task, deleteTask, toggleReminder, toggleEditFormTask, pickChosenTask }) {

    const handleEdit = () => {
        toggleEditFormTask();
        pickChosenTask(task.id);
        return task.id
    };

    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => toggleReminder(task.id)}
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