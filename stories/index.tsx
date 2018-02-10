import * as React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, select, color } from "@storybook/addon-knobs/react"
import * as Progressbar from "../src"

const loadingBarStory = storiesOf("LoadingBar", module)
loadingBarStory.addDecorator(withKnobs)
loadingBarStory.add("default", () => {
  const percent = number("Loading percentage", 20)
  const strokeWidth = number("Stroke width", 2)
  const strokeColor = color("Stroke Color", "#2db7f5")
  const tailColor = color("Tail Color", "#D9D9D9")
  const strokeLinecap = select(
    "Stroke linecap",
    {
      butt: "butt",
      round: "round",
      square: "square",
      inherit: "inherit"
    },
    "round"
  )
  return (
    <Progressbar.Line
      percent={percent}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      tailColor={tailColor}
      strokeLinecap={strokeLinecap}
    />
  )
})
