/* eslint-disable no-undef */
import { BASE_LIBRARY_FILE, BASE_LIBRARY_TARGET_LOCATION } from "./constants";

const fs = require("fs");
const fetch = require("node-fetch");

const download = () => {
  fetch(BASE_LIBRARY_FILE, {
    headers: {
      Accept: "application/vnd.github.v3.raw",
    },
  })
    .then((response) => response.buffer())
    .then((content) => {
      console.log("[FILE]", "Writing " + content);
      fs.writeFileSync(BASE_LIBRARY_TARGET_LOCATION, content);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default download;
