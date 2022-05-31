import React, { ReactNode } from "react";
import "./badge.scss";

export interface BadgeProps {
    active?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element {
    return <div className={"badge" + (props.active ? " active" : "")}></div>;
}
