const fp = require("lodash/fp");

const source = require("../libraries.json");
const { libraries } = source;

const { get, filter, isEqual, flow, map } = fp;

/**
 * Filter and return a value from a list of objects
 */
const f = flow(
  filter(flow(get("bookcount"), isEqual(2000))),
  map(get("name"))
)(libraries);

console.log(f);
