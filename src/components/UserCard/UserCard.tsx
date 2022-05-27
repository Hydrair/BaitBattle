import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import "./userCard.scss";

export interface UserCardProps {
    img: string;
    name: string;
    rank: number;
    points: number;
}

export function UserCard(props: UserCardProps): JSX.Element {
    const [img, setImg] = useState("");
    useEffect(() => {
        const getImg = async () => {
            setImg(
                await Storage.get(props.img, {
                    level: "public",
                })
            );
        };
        getImg();
    }, [props.img]);
    return (
        <section className="usercard">
            <img src={img} />
            <h1>{props.name}</h1>
            <p className="rank">Rang: {props.rank}</p>
            <p className="points">Punkte: {props.points}</p>
        </section>
    );
}
