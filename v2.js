/**
 * Tiny Console Logger
 * A simple console logger with visual style for your projects.
 * @version 1.0.1
 * @author JMcrafter26 <jm26.net>
 * @see {@link https://jm26.net}
 * @see {@link https://github.com/JMcrafter26/vibrant-logger.js}
 * @license MIT
 */
class Logger {
  constructor(json) {
    if (typeof json !== "object") json = {};
    this.name = json.name || "";
    this.theme = json.theme || "auto";
    var customColors = json.customColors || {};
    this.style = json.style || "auto";

    this.colorsDark = {
      INFO: "#82AAFF",
      WARN: "#FFCB6B",
      ERROR: "#FF5370",
      SUCCESS: "#C3E88D",
      DEBUG: "#d382ff",
      UNKNOWN: "#abb2bf",
      background: "#434C5E"
    };
    this.colorsLight = {
      INFO: "#407dff",
      WARN: "#ffb62e",
      ERROR: "#FF5370",
      SUCCESS: "#a0db48",
      DEBUG: "#bc40ff",
      UNKNOWN: "#6e7685",
      background: "#F5F5F5"
    };
    // if customColors is not valid, set it to an empty object
    if (typeof customColors !== "object") customColors = {};

    // if theme is not dark or light and customColors is empty, set colors to dark
    if (
      this.theme !== "dark" &&
      this.theme !== "light" &&
      this.theme !== "auto" &&
      Object.keys(customColors).length === 0
    ) {
      this.colors = this.colorsDark;
    } else {
      // if theme is auto, set colors to dark if system theme is dark
      if (this.theme === "auto") {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
          this.theme = "light";
        } else {
          this.theme = "dark";
        }
      }
      // if theme is dark, set colors to dark
      if (this.theme === "dark") this.colors = this.colorsDark;
      // if theme is light, set colors to light
      if (this.theme === "light") this.colors = this.colorsLight;
      // if customColors is not empty, set colors to customColors
      if (Object.keys(customColors).length !== 0) this.colors = customColors;
    }
  }

  log(message = "No message provided", type = "INFO") {
    // if type is not in the colors object, set it to UNKNOWN
    const typeMsg = type;
    if (!this.colors[type]) type = "UNKNOWN";

    // if this.name is time, set it to the current time
    if (this.name === "time") this.name = new Date().toLocaleTimeString();


        // get the file and linename of the log, e.g. v.2.js:113
        var stack = new Error().stack;
        var stackArray = stack.split("\n");
        // console.log(stackArray);
    
        // log the file name of the current file
        var fileName = stackArray[2].split("/").pop().split(":")[0];
        // if it is bigger than 14 characters, cut it down to 14 characters
        // if (fileName.length > 14) fileName = fileName.substring(0, 14);

    const msgBreak = (message.length + type.length + this.name.length + 6) * 7 > window.outerWidth - window.innerWidth - fileName.length - 180;
    // console.log(msgBreak);
    // console.log("message length: " + message.length);
    // console.log("type length: " + type.length);
    // console.log("name length: " + this.name.length);
    // console.log("window width: " + window.outerWidth);
    // console.log("inner width: " + window.innerWidth);
    // console.log("totalMsg: " + (message.length + type.length + this.name.length + 6) * 7);
    // console.log("totalWin: " + (window.outerWidth - window.innerWidth - fileName.length - 180));


    

    var base;
    if (this.style === "maxi" && !msgBreak) {
      if (this.name === "") {
        base = '%c ' + typeMsg + '\n%c ' + message + ' ';
      } else {
        base = '%c ' + this.name + ' ' + typeMsg + '\n%c ' + message + ' ';
      }
    } else {
      if (this.name === "") {
        base = '%c ' + typeMsg + ' %c ' + message + ' ';
      } else {
        base = '%c ' + this.name + ' ' + typeMsg + ' %c ' + message + ' ';
      }
    }

    // console.log(base);

    var style1;
    var style2;

    if (!msgBreak && this.style === "auto") {
      // Default style example: ( TEST INFO | Hello World )
      style1 = `background: ${this.colors[type]}; color: ${this.colors.background}; padding: 1px; border-radius: 3px 0 0 3px;`;
      style2 = `background: ${this.colors.background}; color: ${this.colors[type]}; padding: 1px; border-radius: 0 3px 3px 0;`;
    } else if (msgBreak || this.style === "maxi") {
      style1 = `background: ${this.colors[type]}; color: ${this.colors.background}; padding: 1px; border-radius: 3px 3px 0 0;`;
      style2 = `background: ${this.colors.background}; color: ${this.colors[type]}; padding: 1px; border-radius: 0 3px 3px 3px;`;
    }

    // log the message
    console.log(base, style1, style2);
  }

  info(message) {
    this.log(message, "INFO");
  }
  warn(message) {
    this.log(message, "WARN");
  }
  error(message) {
    this.log(message, "ERROR");
  }
  success(message) {
    this.log(message, "SUCCESS");
  }
  debug(message) {
    this.log(message, "DEBUG");
  }
  unknown(message) {
    this.log(message, "UNKNOWN");
  }
}
