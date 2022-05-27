import { useEffect, useState } from "react";
import "./ranking.scss";
import { Table } from "../../components/Table";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { User } from "../../models";
export interface RankingProps {}

function Ranking({ signOut, user }): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            const users = await DataStore.query(User, Predicates.ALL, {
                sort: (u) => u.points(SortDirection.DESCENDING),
            });
            setUsers(users);
        };
        getUsers();
    }, []);
    return <Table data={users} />;
}
export default withAuthenticator(Ranking);
