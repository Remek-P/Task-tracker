import React, {useState} from "react";

export function AddTask({ tasks, setTasks }) {

    const date = new Date();
    const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    const timeString = date.getHours() + ":" + (date.getMinutes() > 10
        ? date.getMinutes()
        : "0" + date.getMinutes());

    //TODO: deal with dates
    const [text, setText] = useState("");
    const [day, setDay] = useState(dateString);
    const [time, setTime] = useState(timeString);
    const [reminder, setReminder] = useState(false);

    const addTask = async (e) => {
        e.preventDefault();

        const highestID = tasks.length > 0
            ? [...tasks].sort((a,b) => b.id - a.id)[0].id
            : 0
        const newTask = {
            id: highestID + 1,
            text,
            day,
            time,
            reminder
        }

        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        const data = await res.json();
        setTasks([...tasks, data]);
        setText("");
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label htmlFor="task"></label>
                <input
                    name="task"
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add Task"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="date"></label>
                <input
                    name="date"
                    type="date"
                    value={day}
                    onChange={e => setDay(e.target.value)}
                    placeholder="Add Date"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="time"></label>
                <input
                    name="time"
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    placeholder="Add Time"
                    required
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input
                    name="reminder"
                    type="checkbox"
                    value={reminder}
                    checked={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input
                className="btn btn-block"
                type="submit"
                value="Save New Task"
            />
        </form>
    )
}