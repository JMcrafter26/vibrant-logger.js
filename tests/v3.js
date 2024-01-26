/**
 * VibrantLogger.js
 * A simple console logger with visual style for your projects.
 * @version 1.1.0
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
        this.setConsoleType = json.setConsoleType || false;
  
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
        if (typeof customColors !== "object") customColors = {};
    
        if (
          this.theme !== "dark" &&
          this.theme !== "light" &&
          this.theme !== "auto" &&
          Object.keys(customColors).length === 0
        ) {
          this.colors = this.colorsDark;
        } else {
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
          if (this.theme === "dark") this.colors = this.colorsDark;
          if (this.theme === "light") this.colors = this.colorsLight;
          if (Object.keys(customColors).length !== 0) this.colors = customColors;
        }
      }
    
      log(message = "No message provided", type = "INFO") {
        const typeMsg = type;
        if (!this.colors[type]) type = "UNKNOWN";
        if (this.name === "time") this.name = new Date().toLocaleTimeString();
        var stack = new Error().stack;
      var stackArray = stack.split("\n");
      var fileName = stackArray[2].split("/").pop().split(":")[0];
      var remoteFileName = stackArray[3].split("/").pop().split(":")[0];
      var remoteFileNumber = stackArray[3].split("/").pop().split(":")[1];
      var remoteFile = remoteFileName + ":" + remoteFileNumber;
      if (this.name === "file") this.name = remoteFile;
    
        const msgBreak =
          (message.length + type.length + this.name.length + 6) * 7 >
          window.outerWidth - window.innerWidth - fileName.length - 180;
    
        var base;
        if (this.style === "maxi" && !msgBreak) {
          if (this.name === "") {
            base = "%c " + typeMsg + "\n%c " + message + " ";
          } else {
            base = "%c " + this.name + " " + typeMsg + "\n%c " + message + " ";
          }
        } else {
          if (this.name === "") {
            base = "%c " + typeMsg + " %c " + message + " ";
          } else {
            base = "%c " + this.name + " " + typeMsg + " %c " + message + " ";
          }
        }
    
        var style1;
        var style2;
    
        if (!msgBreak && this.style === "auto") {
          style1 = `background: ${this.colors[type]}; color: ${this.colors.background}; padding: 1px; border-radius: 3px 0 0 3px;`;
          style2 = `background: ${this.colors.background}; color: ${this.colors[type]}; padding: 1px; border-radius: 0 3px 3px 0;`;
        } else if (msgBreak || this.style === "maxi") {
          style1 = `background: ${this.colors[type]}; color: ${this.colors.background}; padding: 1px; border-radius: 3px 3px 0 0;`;
          style2 = `background: ${this.colors.background}; color: ${this.colors[type]}; padding: 1px; border-radius: 0 3px 3px 3px;`;
        }
    
        // log the message
          if (this.setConsoleType) {
              if (type === "ERROR") {
              console.error(base, style1, style2);
              } else if (type === "WARN") {
              console.warn(base, style1, style2);
              } else if (type === "SUCCESS") {
              console.info(base, style1, style2);
              } else if (type === "DEBUG") {
              console.debug(base, style1, style2);
              } else {
              console.log(base, style1, style2);
              }
          } else {
              console.log(base, style1, style2);
          }
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