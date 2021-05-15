/* eslint-disable no-undef */
const BASE_LIBRARY_REPO = "ds-pack-style-guide";
const BASE_LIBRARY_PATH = "build/js/tokens.js";
const BASE_LIBRARY_OWNER = "youssef-tharwat";
const BASE_LIBRARY_FILE = `https://api.github.com/repos/${BASE_LIBRARY_OWNER}/${BASE_LIBRARY_REPO}/contents/${BASE_LIBRARY_PATH}`;

const BASE_LIBRARY_TARGET_LOCATION = "./src/vendors/tailwind/tokens/index.js";

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
      fs.writeFileSync(BASE_LIBRARY_TARGET_LOCATION, content);
    })
    .catch((e) => {
      console.log(e);
    });
};

download();
