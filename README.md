# AIR Progressbar

![NPM version](http://img.shields.io/npm/v/air-progressbar.svg?style=flat-square)

[![npm](https://img.shields.io/npm/dm/air-progressbar.svg?style=flat-square)](https://www.npmjs.com/package/air-progressbar#demo)

Progress bars for React. Line shaped

**Shortcuts**

* [How to install](#how-to-install)
* [Demo](#demo) TBD


## Get started

*Air Progressbar* is a lightweight progressbar component for React

#### How to install

Install the library using npm:

```
npm install --save air-progressbar
```

## How it works


### Shape

Line progress bar. Appends SVG to container.

**Example**

```javascript
import * as Progressbar from "air-progressbar"
export default App extends React.Component {
    render() {
        return (
            <Progressbar.Line
                percent={20}
            />
        )
    }

}
```

**Props:**

Prop               | Description
-------------------|------------------------
percent?: number           | Progress from 0 to 100. E.g. 67% progress would equal `67`. Default `0`.
strokeWidth?: number               | Value for progress bar's stroke width. Default `1`.
strokeColor?: string            | Value for progress bar's stroke color. Default `#2db7f5`
tailColor?: string     | Value for progress bar's tail color. Default `#D9D9D9`
strokeLinecap?: Options("butt","round","square","inherit")     | Styles for progress bar. Default is `round`
