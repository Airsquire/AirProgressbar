import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })
import * as React from "react"
import { Line } from "../"

describe("<Line />", () => {
  it("renders the the svg with round", () => {
    const wrapper = Enzyme.shallow(
      <Line
        percent={0}
        strokeColor="#2db7f5"
        strokeLinecap="round"
        strokeWidth={1}
        tailColor="#D9D9D9"
      />
    )
    expect(wrapper.find("svg").length).toBe(1)
    expect(wrapper.find("path").length).toBe(2)
  })
  it("renders the the svg with butt", () => {
    const wrapper = Enzyme.shallow(
      <Line
        percent={0}
        strokeColor="#2db7f5"
        strokeLinecap="butt"
        strokeWidth={1}
        tailColor="#D9D9D9"
      />
    )
    expect(wrapper.find("svg").length).toBe(1)
    expect(wrapper.find("path").length).toBe(2)
  })
})
