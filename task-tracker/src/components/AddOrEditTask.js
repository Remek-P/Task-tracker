import React, {useState} from "react";
import {AddTask} from "./AddTask";
import {EditTask} from "./EditTask";

export function AddOrEditTask({ tasks, setTasks, showEditTask, setShowEditTask }) {

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

    return (
        <>
            {
                !showEditTask
                ? <AddTask
                    tasks={tasks} setTasks={setTasks}
                    text={text} setText={setText}
                    day={day} setDay={setDay}
                    time={time} setTime={setTime}
                    reminder={reminder} setReminder={setReminder}
                />
                : <EditTask
                tasks={tasks} setTasks={setTasks}
                showEditTask={showEditTask} setShowEditTask={setShowEditTask}
                text={text} setText={setText}
                day={day} setDay={setDay}
                time={time} setTime={setTime}
                reminder={reminder} setReminder={setReminder}
                />
            }
        </>
    )
}