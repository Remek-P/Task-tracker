import React, { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";

function App() {

    const tasksList = [
        {
            id: 1,
            text: "a",
            day: "Feb 4th",
            time: "13:00",
            reminder: true,
        },
        {
            id: 2,
            text: "b",
            day: "Feb 5th",
            time: "13:30",
            reminder: true,
        },
        {
            id: 3,
            text: "c",
            day: "Feb 6th",
            time: "14:00",
            reminder: false,
        },
    ]

    const [tasks, setTasks] = useState(tasksList);
    const [showAddTask, setShowAddTask] = useState(false);

    const showAddTaskForm = () => {
        setShowAddTask(!showAddTask)
    };

    return (
        <div className="container">
            <Header showAddTask={showAddTask} showAddTaskForm={showAddTaskForm} />
            {showAddTask && <AddTask tasks={tasks} setTasks={setTasks} />}
            <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
