import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";

function App() {

    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    const showAddTaskForm = () => {
        setShowAddTask(!showAddTask)
    };

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()

        return data
    }

    return (
        <div className="container">
            <Header showAddTask={showAddTask} showAddTaskForm={showAddTaskForm} />
            {showAddTask && <AddTask tasks={tasks} setTasks={setTasks} />}
            <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
