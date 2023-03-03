import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddOrEditTask } from "./components/AddOrEditTask";

function App() {

    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);
    const [chosenTask, setChosenTask] = useState("");

    const toggleAddTaskForm = () => {
        setShowAddTask(!showAddTask)
    };

    const toggleEditTaskForm = () => {
        setShowEditTask(false)
    };


    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };

        getTasks();
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        return await res.json()
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        return await res.json();
    };

    const pickChosenTask = (task) => {
        setChosenTask(task)
    };


    return (
        <div className="container">
            <Header
                showAddTask={showAddTask}
                toggleAddTaskForm={toggleAddTaskForm}
                toggleEditTaskForm={toggleEditTaskForm}
            />
            {
                showAddTask &&
                <AddOrEditTask
                    tasks={tasks}
                    setTasks={setTasks}
                    showEditTask={showEditTask}
                    setShowAddTask={setShowAddTask}
                    setShowEditTask={setShowEditTask}
                    chosenTask={chosenTask}
                />
            }
            <Tasks
                tasks={tasks} setTasks={setTasks}
                showEditTask={showEditTask} setShowEditTask={setShowEditTask}
                setShowAddTask={setShowAddTask}
                fetchTask={fetchTask}
                pickChosenTask={pickChosenTask}
            />
        </div>
    );
}

export default App;
