
# Tiny-Logger.js

![Thumbnail](./images/Vibrant-Logger-thumbnail.png)

The stripped down version of the library. It only contains the most basic features and is perfect for tiny projects. It doesn't require any setup and is design to be pasted directly into your project.

## Table of Contents

- [Tiny-Logger.js](#tiny-loggerjs)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [JavaScript](#javascript)
    - [HTML](#html)
  - [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Installation

Just paste the following code into your js or html file.

### JavaScript

```js
    function log(o="INFO",d){var r;r={INFO:"#82AAFF",WARN:"#FFCB6B",ERROR:"#FF5370",SUCCESS:"#C3E88D",DEBUG:"#d382ff",UNKNOWN:"#abb2bf",background:"#434C5E"},console.log("%c [NAME OF YOUR APP] "+o+" %c "+d+" ","background: "+r[o]+"; color: "+r.background+"; padding: 1px; border-radius: 3px 0 0 3px;","background: "+r.background+"; color: "+r[o]+"; padding: 1px; border-radius: 0 3px 3px 0;")}
```

### HTML

```html
<script>
    function log(o="INFO",d){var r;r={INFO:"#82AAFF",WARN:"#FFCB6B",ERROR:"#FF5370",SUCCESS:"#C3E88D",DEBUG:"#d382ff",UNKNOWN:"#abb2bf",background:"#434C5E"},console.log("%c [NAME OF YOUR APP] "+o+" %c "+d+" ","background: "+r[o]+"; color: "+r.background+"; padding: 1px; border-radius: 3px 0 0 3px;","background: "+r.background+"; color: "+r[o]+"; padding: 1px; border-radius: 0 3px 3px 0;")}
</script>
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

![Screenshot](./images/tinylogger-usage.png)

# Customization

You can customize the colors and the name of the logger.

Change the content of `[NAME OF YOUR APP]` to the name of your app.

Change the colors by changing the values of the `colors` variable.

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

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
