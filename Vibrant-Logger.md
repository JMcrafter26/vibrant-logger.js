# Vibrant-Logger.js

![Thumbnail](./images/Vibrant-Logger-thumbnail.png)

A simple but visually pleasing console logger for JavaScript.

## Table of Contents

- [Vibrant-Logger.js](#vibrant-loggerjs)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [CDN](#cdn)
    - [File](#file)
  - [Usage](#usage)
  - [Customization](#customization)
    - [Themes](#themes)
    - [Styles](#styles)

## Features

- :art: Beautiful colors
- :sparkles: Easy to use
- :wrench: Highly customizable
- :tada: No dependencies
- :package: Easy to install
- :soon: More features coming soon

## Installation

**First**, include the script in your project. We recommend using the CDN, but you can also download the file and include it locally.

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/jmcrafter26/vibrant-logger.js/VibrantLogger.min.js"></script>
```

### File

```html
<script src="VibrantLogger.min.js"></script>
```

**Second**, initialize the logger. You can do this by simply creating a new instance of the `Logger` class.

```js
const logger = new Logger();
```
**That's it!** You can now use the logger to log messages to the console. (See [Usage](#usage))

## Usage

There are 6 different log levels (for now):

- `INFO` - Used for general information
- `WARN` - Used for warnings
- `ERROR` - Used for errors
- `SUCCESS` - Used for success messages
- `DEBUG` - Used for debugging
- `UNKNOWN` - Used for unknown or undefined log levels

You can use the `log` function to log a message to the console.

```js
logger.info("This is INFO");
logger.warn("This is WARN");
logger.error("This is ERROR");
logger.success("This is SUCCESS");
logger.debug("This is DEBUG");
```

This will output the following:

![Screenshot](./images/VibrantLogger-usage1.png)

You can also use the `log` function to log a message to the console.

```js
logger.log("INFO", "This is INFO");
```

This is basically the same as the code above, but it allows you to add custom log levels. (See [Customization](#customization))

## Customization

You can customize the name, theme, style, and more of the logger.

```js
const logger = new Logger({
    name: "My App", // The name of your app
    theme: "light", // The theme of the logger (auto, light, dark)
    style: "maxi" // The style of the logger (auto, maxi)
});
```

<details>
<summary>Click here to learn more about the different themes and styles.</summary>

### Themes

There are 3 different themes:

- `auto` - Automatically changes the theme based on the user's system theme. **(default)**
- `light` - Uses a light theme
- `dark` - Uses a dark theme

### Styles

There are 2 different styles:

- `auto` - Automatically changes the style based on the user's screen size. **(default)**
- `maxi` - Uses a large style

*I know, there aren't many options and some may be buggy. But please keep in mind that this is a side project and if you want to see more features, you can always contribute to the project.*

</details>

You can also use custom themes and types.

```js
const logger = new Logger({
    name: "My App", // The name of your app
customColors: {
        INFO: "#82AAFF",
        WARN: "#FFCB6B",
        EXAMPLE1: "#1FCA3A",
        EXAMPLE2: "#FF5370",
        EXAMPLE3: "#C3E88D",

        background: "#434C5E"
    }
});
```

To use the custom types, you can use the `log` function.

```js
logger.log("EXAMPLE1", "This is EXAMPLE1");
logger.log("EXAMPLE2", "This is EXAMPLE2");
logger.log("EXAMPLE3", "This is EXAMPLE3");
```

