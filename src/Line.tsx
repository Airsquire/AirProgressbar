import * as React from "react"

export interface InterfaceLineProps {
    percent: number
    strokeWidth: number
    strokeColor: string
    tailColor: string
    strokeLinecap: "butt" | "round" | "square" | "inherit"
}

class Line extends React.Component<InterfaceLineProps> {
  private static defaultProps = {
    percent: 0,
    strokeColor: "#2db7f5",
    strokeLinecap: "round",
    strokeWidth: 1,
    tailColor: "#D9D9D9"
  }

  render() {
    const pathStyle = {
      strokeDasharray: "100px, 100px",
      strokeDashoffset: `${100 - this.props.percent}px`,
      transition: "stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear"
    }
    const center = this.props.strokeWidth / 2
    const right = 100 - this.props.strokeWidth / 2
    const pathString = `M ${
      this.props.strokeLinecap === "round" ? center : 0
    },${center}
           L ${this.props.strokeLinecap === "round" ? right : 100},${center}`
    const viewBoxString = `0 0 100 ${this.props.strokeWidth}`

    return (
      <svg viewBox={viewBoxString} preserveAspectRatio="none">
        <path
          className={`line-trail`}
          d={pathString}
          strokeLinecap={this.props.strokeLinecap}
          stroke={this.props.tailColor}
          strokeWidth={this.props.strokeWidth}
          fillOpacity="0"
        />
        <path
          className={`line-path`}
          d={pathString}
          strokeLinecap={this.props.strokeLinecap}
          stroke={this.props.strokeColor}
          strokeWidth={this.props.strokeWidth}
          fillOpacity="0"
          style={pathStyle}
        />
      </svg>
    )
  }
}
export default Line
