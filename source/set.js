const fp = require("lodash/fp");

const source = require("../libraries.json");
const { libraries } = source;

const { set } = fp;

const name = set("0.manager", "Bob", libraries);
console.log(name);
