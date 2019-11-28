const fp = require("lodash/fp");

const source = require("../libraries.json");
const { libraries } = source;

const { get, getOr } = fp;

/**
 * get returns a value based on a path
 */
const name = get("name", libraries[0]);
console.log(name);

/**
 * get returns a value based on a path
 */
const name2 = get("[0].name", libraries);
console.log(name2);

/**
 * getOr can return a value if the fetch is falsy
 */
const telephone = getOr("No Telephone", "[0].telephone", libraries);
console.log(telephone);

/**
 * fp functions are curried
 */
const address = get("[0].address");
console.log(address(libraries));

/**
 * get returns a value based on a compund path
 */
const compondname = get("libraries[1].name", source);
console.log(compondname);
