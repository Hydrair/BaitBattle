import React from "react";
import "./button.scss";

export interface ButtonProps {
    func: void;
    label: string;
}

export function Button(props: ButtonProps): JSX.Element {
    return (
        <button onClick={() => props.func}>
            <span>{props.label}</span>
        </button>
    );
}
