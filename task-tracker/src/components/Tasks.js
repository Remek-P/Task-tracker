import React from "react";

import { Task } from "./Task";

export function Tasks ({ tasks, setTasks }) {

    const noTasksMessage = "You are all set!"

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map(task => task.id === id
            ? { ...task, reminder: !task.reminder }
            : task
        ))
    }

    return (
        <>
            {
                tasks.length !== 0
                    ? tasks.map((task =>
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleReminder={toggleReminder}
                        />))
                    : noTasksMessage
            }
        </>
    )
}