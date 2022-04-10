import { useState, useEffect } from "react";
import { Pill } from "../../components/Pill";
import { UserCard } from "../../components/UserCard";
import { View } from "../../components/View";
import { url } from "../../services/provider";
import { User } from "../../types";
import { useQuery } from "react-query";
import "./profile.scss";

export interface ProfileProps {
    username: string;
}

export function Profile(props: ProfileProps): JSX.Element {
    const user = useQuery("user", () =>
        fetch(`${url}/user?username=${props.username}`).then((res) =>
            res.json()
        )
    );

    if (user.isLoading) {
        return <View>Loading...</View>;
    }
    const userJson = user.data.Items[0];
    return (
        <View>
            <UserCard
                name={`${userJson.firstName} ${userJson.lastName}`}
                rank={userJson.rank}
                points={userJson.points}
                img={userJson.avatar}
            />
            <section className="center">
                <h2>Zielfische</h2>
                {userJson.fish !== undefined &&
                    userJson.fish
                        .filter((fish: { target: any }) => fish.target)
                        .sort(
                            (a: { species: number }, b: { species: number }) =>
                                a.species - b.species
                        )
                        .map((fish: any) => {
                            return <Pill fish={fish} key={fish.id} />;
                        })}
                <h3>Weitere Wertungsfische</h3>
                {userJson.fish !== undefined &&
                    userJson.fish
                        .filter((fish: { target: any }) => !fish.target)
                        .sort(
                            (a: { species: number }, b: { species: number }) =>
                                a.species - b.species
                        )
                        .map((fish: any) => {
                            return <Pill fish={fish} key={fish.id} />;
                        })}
            </section>
        </View>
    );
}
