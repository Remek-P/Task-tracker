import React, {useState} from "react";

export function AddTask({ tasks, setTasks }) {

    const date = new Date()
    const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    const timeString = date.getHours() + ":" + date.getMinutes();

    //TODO: deal with dates
    const [task, setTask] = useState("");
    const [day, setDay] = useState(dateString);
    const [time, setTime] = useState(timeString);
    const [reminder, setReminder] = useState(false);

    const addTask = (e) => {
        e.preventDefault()
        const highestID = [...tasks].sort((a,b) => b.id - a.id)[0].id
        const newTask = {
            id: highestID + 1,
            text: task,
            day,
            time,
            reminder,
        }
            setTasks([...tasks, newTask])
    }

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label htmlFor="task"></label>
                <input
                    name="task"
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
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
                    onChange={e => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input
                className="btn btn-block"
                type="submit"
                value="Save Task"
            />
        </form>
    )
}