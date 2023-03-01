import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddOrEditTask } from "./components/AddOrEditTask";

function App() {

    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);

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
        }

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
                    setShowEditTask={setShowEditTask}
                />
            }
            <Tasks
                tasks={tasks}
                setTasks={setTasks}
                showEditTask={showEditTask}
                setShowEditTask={setShowEditTask}
                fetchTask={fetchTask}
                toggleAddTaskForm={toggleAddTaskForm}
            />
        </div>
    );
}

export default App;
