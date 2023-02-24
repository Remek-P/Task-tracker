import React from "react";

import { Task } from "./Task";

export function Tasks ({ tasks, setTasks }) {

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
        console.log("click", id)
    }

    return (
        <>
            {
                tasks.map((task =>
                    <Task
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                    />))
            }
        </>
    )
}