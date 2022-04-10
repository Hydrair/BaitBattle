import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import "./view.scss";

export interface ViewProps {
    children: ReactNode;
}

export function View(props: ViewProps): JSX.Element {
    return (
        <div className="view">
            <Header />
            {props.children}
        </div>
    );
}
