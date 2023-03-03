import React, { useState } from "react";

export function EditTask({ tasks, setTasks, setShowAddTask, setShowEditTask, chosenTask }) {

    const [edText, setEdText] = useState(chosenTask.text);
    const [edDay, setEdDay] = useState(chosenTask.day);
    const [edTime, setEdTime] = useState(chosenTask.time);
    const [edReminder, setEdReminder] = useState(chosenTask.reminder);

    const saveTask = async (e) => {
        e.preventDefault();

        const editedTask = {
            id: chosenTask.id,
            text: edText,
            day: edDay,
            time: edTime,
            reminder: edReminder
        };

        const res = await fetch(`http://localhost:5000/tasks/${chosenTask.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(editedTask),
        });

        const data = await res.json();
        setTasks(tasks.map(task => task.id === chosenTask.id
            ? task = data
            : task
        ));

        setShowEditTask(false);
        setShowAddTask(false);
    }
    // TODO: close the form (setAddTaskForm to false

    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="form-control">
                <label htmlFor="editTask"></label>
                <input
                    name="editTask"
                    type="text"
                    value={edText}
                    onChange={e => setEdText(e.target.value)}
                    placeholder="Edit Task"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="editDate"></label>
                <input
                    name="editDate"
                    type="date"
                    value={edDay}
                    onChange={e => setEdDay(e.target.value)}
                    placeholder="Edit Date"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="editTime"></label>
                <input
                    name="editTime"
                    type="time"
                    value={edTime}
                    onChange={e => setEdTime(e.target.value)}
                    placeholder="Edit Time"
                    required
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="editReminder">Set Reminder</label>
                <input
                    name="editReminder"
                    type="checkbox"
                    value={edReminder}
                    checked={edReminder}
                    onChange={e => setEdReminder(e.currentTarget.checked)}
                />
            </div>

            <input
                className="btn btn-block"
                type="submit"
                value="Save Edited Task"
            />
        </form>
    )
}