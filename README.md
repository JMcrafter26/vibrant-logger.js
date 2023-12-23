# Big Updates are queued. Star to get notified!


# Tiny Console Logger

A very simple but visually pleasing console logger for JavaScript.

## Table of Contents

- [Tiny Console Logger](#tiny-console-logger)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Simple](#simple)
    - [File](#file)
    - [Inlined](#inlined)
  - [Usage](#usage)
  - [Themes](#themes)
  - [Customization](#customization)
  - [License](#license)

## Features

- :art: Beautiful colors
- :sparkles: Easy to use
- :zap: Tiny size
- :wrench: Customizable
- :tada: No dependencies

## Installation

There are two ways to install the library:

- [Simple](#simple)
- [Advanced](#advanced)

### Simple

Include the `tinylogger.js` (or `tinylogger.min.js`) file in your project.

### File

You can download the `tinylogger.js` or `tinylogger.min.js` file and include it in your project.

It's recommended to 

```html
<script src="tinylogger.min.js"></script>
```

### Inlined

You can also directly inline the code in your project, e.g. in your `html` or `js` file.
**Note:** This is a stripped down version of the `tinylogger.js` file, perfect for tiny projects.

```js
    function log(o="INFO",d){var r;r={INFO:"#82AAFF",WARN:"#FFCB6B",ERROR:"#FF5370",SUCCESS:"#C3E88D",DEBUG:"#d382ff",UNKNOWN:"#abb2bf",background:"#434C5E"},console.log("%c [NAME OF YOUR APP] "+o+" %c "+d+" ","background: "+r[o]+"; color: "+r.background+"; padding: 1px; border-radius: 3px 0 0 3px;","background: "+r.background+"; color: "+r[o]+"; padding: 1px; border-radius: 0 3px 3px 0;")}
```

## Usage

There are 6 different log levels:

- `INFO`
- `WARN`
- `ERROR`
- `SUCCESS`
- `DEBUG`
- `UNKNOWN`

You can use the `log` function to log a message to the console.

```js
log("INFO", "This is INFO");
log("WARN", "This is WARN");
log("ERROR", "This is ERROR");
log("SUCCESS", "This is SUCCESS");
log("DEBUG", "This is DEBUG");
log("UNKNOWN", "This is UNKNOWN");
```

This will output the following:

![Screenshot](https://raw.githubusercontent.com/jmcrafter26/tinylogger/master/images/usage.png)

## Themes

There are 2 different themes:

- `dark` **(default)**
- `light`

You can change the theme by setting the `theme` variable to either `dark` or `light`.

```js
const theme = "light";
```

## Customization

You can customize the colors by changing the `colors` variable.

```js
const colors = {
  INFO: "#82AAFF",
  WARN: "#FFCB6B",
  ERROR: "#FF5370",
  SUCCESS: "#C3E88D",
  DEBUG: "#d382ff",
  UNKNOWN: "#abb2bf",
  background: "#434C5E",
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
