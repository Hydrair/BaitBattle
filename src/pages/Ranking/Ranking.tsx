import React, { useEffect, useState } from "react";
import "./ranking.scss";
import { Table } from "../../components/Table";
import { View } from "../../components/View";
import { User } from "../../types";
export interface RankingProps {}

export function Ranking(props: RankingProps): JSX.Element {
    const [user, setUser] = useState([{} as User]);

    useEffect(() => {
        fetch("/user/0")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);
    return (
        <View>
            <Table data={user} />
        </View>
    );
}
