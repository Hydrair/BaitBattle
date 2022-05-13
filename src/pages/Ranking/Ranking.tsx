import React, { useEffect, useState } from "react";
import "./ranking.scss";
import { Table } from "../../components/Table";
import { View } from "../../components/View";
import { User } from "../../types";
import { url } from "../../services/provider";
import { useQuery } from "react-query";

export interface RankingProps {}

export function Ranking(props: RankingProps): JSX.Element {
    const user = useQuery("user", () =>
        fetch(`${url}/user`).then((res) => res.json())
    );
    if (user.isLoading) {
        return <View>Loading...</View>;
    }
    return (
        <View>
            <Table data={user.data.Items} />
        </View>
    );
}
