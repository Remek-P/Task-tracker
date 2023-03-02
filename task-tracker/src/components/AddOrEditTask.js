import React from "react";
import { AddTask } from "./AddTask";
import { EditTask } from "./EditTask";

export function AddOrEditTask({ tasks, setTasks, showEditTask, setShowEditTask, chosenTask }) {



    return (
        <>
            {
                !showEditTask
                ? <AddTask
                    tasks={tasks} setTasks={setTasks}
                />
                : <EditTask
                tasks={tasks} setTasks={setTasks}
                showEditTask={showEditTask} setShowEditTask={setShowEditTask}
                chosenTask={chosenTask}
                />
            }
        </>
    )
}