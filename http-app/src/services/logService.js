// import Raven from "raven-js";

function init() {
  // Raven.config("ADD YOUR OWN API KEY", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
}

export default {
  init,
  log
};