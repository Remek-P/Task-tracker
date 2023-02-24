import React, { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {

    const tasksList = [
        {
            id: 1,
            text: "a",
            day: "Feb 4th at 1:00pm",
            reminder: true,
        },
        {
            id: 2,
            text: "b",
            day: "Feb 5th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "c",
            day: "Feb 6th at 2:00pm",
            reminder: false,
        },
    ]

    const [tasks, setTasks] = useState(tasksList);

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;
