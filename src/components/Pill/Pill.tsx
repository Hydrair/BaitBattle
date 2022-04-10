import React from "react";
import { Fish } from "../../types";
import "./pill.scss";

export interface PillProps {
    fish: Fish;
}

export function Pill(props: PillProps): JSX.Element {
    return (
        <section className="pill">
            <h2>{props.fish.species}</h2>
            <div className="break" />
            <div className="break" />
            <p className="length">Länge: {props.fish.length}</p>
            <p className="points">Punkte: {props.fish.points}</p>
        </section>
    );
}
