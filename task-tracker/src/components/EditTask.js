import React, { useEffect, useState } from "react";

export function EditTask({ tasks, setTasks, showEditTask, setShowEditTask, chosenTask }) {

    // console.log(chosenTask)

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState(undefined);

    useEffect(() => {
        setText(chosenTask.text)
    },[])

    const saveTask = async (e) => {
        e.preventDefault();


        setShowEditTask(false);
        //
        // const newTask = {
        //     // id,
        //     text,
        //     day,
        //     time,
        //     reminder
        // }
        //
        // const res = await fetch('http://localhost:5000/tasks', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(newTask),
        // });
        //
        // const data = await res.json();
        // setTasks([...tasks, data]);
        // setText("")
    }

    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="form-control">
                <label htmlFor="editTask"></label>
                <input
                    name="editTask"
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Edit Task"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="editDate"></label>
                <input
                    name="editDate"
                    type="date"
                    value={day}
                    onChange={e => setDay(e.target.value)}
                    placeholder="Edit Date"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="editTime"></label>
                <input
                    name="time"
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    placeholder="Edit Time"
                    required
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input
                    name="reminder"
                    type="checkbox"
                    value={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
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