import React from "react";
import "./userCard.scss";

export interface UserCardProps {
    img: string;
    name: string;
    rank: number;
    points: number;
}

export function UserCard(props: UserCardProps): JSX.Element {
    return (
        <section className="usercard">
            <img src={props.img} />
            <h1>{props.name}</h1>
            <p className="rank">Rang: {props.rank}</p>
            <p className="points">Punkte: {props.points}</p>
        </section>
    );
}
