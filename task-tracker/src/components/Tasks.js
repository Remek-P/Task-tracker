import React from "react";

import {Task} from "./Task";

export function Tasks ({ tasks, setTasks, showEditTask, setShowEditTask, setShowAddTask, fetchTask, pickChosenTask }) {

    const noTasksMessage = "You are all set!";

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task')
    };

    const toggleReminder = async (id) => {
        const reminderToggle = await fetchTask(id);
        const updateTask = { ...reminderToggle, reminder: !reminderToggle.reminder };
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        });

        const data = await res.json();

        setTasks(tasks.map(task => task.id === id
            ? { ...task, reminder: data.reminder }
            : task
        ))
    };

    const toggleEditFormTask = () => {
        setShowEditTask(true);
        setShowAddTask(true);
    };

    return (
        <>
            {
                tasks.length !== 0
                    ? tasks.map((task =>
                        <Task
                            key={task.id}
                            task={task}
                            showEditTask={showEditTask}
                            deleteTask={deleteTask}
                            toggleReminder={toggleReminder}
                            toggleEditFormTask={toggleEditFormTask}
                            pickChosenTask={pickChosenTask}
                        />))
                    : noTasksMessage
            }
        </>
    )
}