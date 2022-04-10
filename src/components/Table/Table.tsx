import { useState, useEffect } from "react";
import { User } from "../../types";
import "./table.scss";

export interface TableProps {
    data: User[];
}

export function Table(props: TableProps): JSX.Element {
    const [data, setData] = useState([{} as User]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Name</th>
                    <th>Punkte</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 &&
                    data
                        .sort((a, b) => a.id - b.id)
                        .map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{`${user.name} ${user.email}`}</td>
                                    <td>{"1000"}</td>
                                </tr>
                            );
                        })}
            </tbody>
        </table>
    );
}
