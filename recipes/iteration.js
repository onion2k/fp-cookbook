const fp = require("lodash/fp");

const source = require("../libraries.json");
const { libraries } = source;

const { get, map } = fp;

/**
 * Iteration over an array of objects
 */
const f = map(get("name"))(libraries);

console.log(f);
