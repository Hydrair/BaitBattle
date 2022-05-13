import { useState, useEffect } from "react";
import { User } from "../../types";
import "./table.scss";

export interface TableProps {
    data: User[];
}

export function Table(props: TableProps): JSX.Element {
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
                {props.data.length > 0 &&
                    props.data
                        .sort((a, b) => a.points! - b.points!)
                        .map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{`${user.firstName} ${user.lastName}`}</td>
                                    <td>{user.points}</td>
                                </tr>
                            );
                        })}
            </tbody>
        </table>
    );
}
