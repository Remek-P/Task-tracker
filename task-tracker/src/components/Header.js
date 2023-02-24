import React from "react";
import { Button } from "./Button";

export function Header () {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color="green" text="Add" />
        </header>
    )
}