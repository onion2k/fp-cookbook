const fp = require("lodash/fp");

const source = require("../libraries.json");
const { libraries } = source;

const { set, update } = fp;

const libraryWithManager = set("0.manager", "Bob", libraries);
console.log(libraryWithManager);

const libraryWithManagerUpperCase = update(
  "0.manager",
  manager => manager.toUpperCase(),
  libraryWithManager
);
console.log(libraryWithManagerUpperCase);
