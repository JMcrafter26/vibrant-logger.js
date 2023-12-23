/**
 * Tiny Console Logger
 * A simple console logger with visual style for your projects.
 * @version 1.0.1
 * @author JMcrafter26 <jm26.net>
 * @see {@link https://jm26.net}
 * @see {@link https://github.com/JMcrafter26/tiny-console-logger}
 * @license MIT
 */

function log(type = "INFO", message) {
  const name = "NAME OF YOUR APP"; // Name of your app
  const theme = "dark"; // light or dark

  const colorsDark = {
    INFO: "#82AAFF",
    WARN: "#FFCB6B",
    ERROR: "#FF5370",
    SUCCESS: "#C3E88D",
    DEBUG: "#d382ff",
    UNKNOWN: "#abb2bf",
    background: "#434C5E"
  };

  const colorsLight = {
    INFO: "#407dff",
    WARN: "#ffb62e",
    ERROR: "#FF5370",
    SUCCESS: "#a0db48",
    DEBUG: "#bc40ff",
    UNKNOWN: "#6e7685",
    background: "#F5F5F5"
  };

  var colors;
  if (theme === "light") {
    colors = colorsLight;
  } else {
    colors = colorsDark;
  }
  console.log(
    "%c [" + name + "] " + type + " %c " + message + " ",
    "background: " +
      colors[type] +
      "; color: " +
      colors["background"] +
      "; padding: 1px; border-radius: 3px 0 0 3px;",
    "background: " +
      colors["background"] +
      "; color: " +
      colors[type] +
      "; padding: 1px; border-radius: 0 3px 3px 0;"
  );
}
