import { useState, useEffect } from "react";
import { User } from "../../models";
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
                    props.data.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{`${user.points}`}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}
