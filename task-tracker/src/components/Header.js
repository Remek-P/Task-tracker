import React from "react";
import { Button } from "./Button";

export function Header ({ showAddTaskForm }) {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color="green" text="Add" showAddTaskForm={showAddTaskForm} />
        </header>
    )
}