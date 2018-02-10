"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Line extends React.Component {
    render() {
        const pathStyle = {
            strokeDasharray: "100px, 100px",
            strokeDashoffset: `${100 - this.props.percent}px`,
            transition: "stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear"
        };
        const center = this.props.strokeWidth / 2;
        const right = 100 - this.props.strokeWidth / 2;
        const pathString = `M ${this.props.strokeLinecap === "round" ? center : 0},${center}
           L ${this.props.strokeLinecap === "round" ? right : 100},${center}`;
        const viewBoxString = `0 0 100 ${this.props.strokeWidth}`;
        return (React.createElement("svg", { viewBox: viewBoxString, preserveAspectRatio: "none" },
            React.createElement("path", { className: `line-trail`, d: pathString, strokeLinecap: this.props.strokeLinecap, stroke: this.props.tailColor, strokeWidth: this.props.strokeWidth, fillOpacity: "0" }),
            React.createElement("path", { className: `line-path`, d: pathString, strokeLinecap: this.props.strokeLinecap, stroke: this.props.strokeColor, strokeWidth: this.props.strokeWidth, fillOpacity: "0", style: pathStyle })));
    }
}
Line.defaultProps = {
    percent: 0,
    strokeColor: "#2db7f5",
    strokeLinecap: "round",
    strokeWidth: 1,
    tailColor: "#D9D9D9"
};
exports.default = Line;
//# sourceMappingURL=Line.js.map