/// <reference types="react" />
import * as React from "react";
export interface InterfaceLineProps {
    percent: number;
    strokeWidth: number;
    strokeColor: string;
    tailColor: string;
    strokeLinecap: "butt" | "round" | "square" | "inherit";
}
declare class Line extends React.Component<InterfaceLineProps> {
    private static defaultProps;
    render(): JSX.Element;
}
export default Line;
