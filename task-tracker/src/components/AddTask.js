import React, {useState} from "react";

export function AddTask() {

    const [task, setTask] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="task"></label>
                <input
                    name="task"
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Add Task"
                />
            </div>
            <div className="form-control">
                <label htmlFor="date"></label>
                <input
                    name="date"
                    type="text"
                    value={day}
                    onChange={e => setDay(e.target.value)}
                    placeholder="Add Date & Time"
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

            <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}