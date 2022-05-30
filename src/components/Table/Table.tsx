import { useState, useEffect } from "react";
import { User } from "../../models";
import { Storage } from "aws-amplify";
import "./table.scss";
import { Link } from "react-router-dom";

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
                                <td>
                                    <Link to={`/profile`} state={user}>
                                        {i + 1}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/profile`} state={user}>
                                        {`${user.firstName} ${user.lastName}`}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/profile`} state={user}>
                                        {`${user.points}`}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}
