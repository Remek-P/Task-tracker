import React from "react";
import { Button } from "./Button";

export function Header ({ showAddTask, showAddTaskForm }) {

    const buttonText = !showAddTask ? "Add" : "Close";
    const buttonColor = !showAddTask ? "green" : "red";

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color={buttonColor} text={buttonText} showAddTaskForm={showAddTaskForm} />
        </header>
    )
}