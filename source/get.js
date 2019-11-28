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
 * get returns a value based on a path with array syntax
 */
const nameFromArray = get("[0].name", libraries);
console.log(nameFromArray);

/**
 * get returns a value based on a path with object syntax
 */
const nameFromArrayAsObject = get("0.name", libraries);
console.log(nameFromArrayAsObject);

/**
 * getOr can return a value if the fetch is falsy
 */
const telephone = getOr("No Telephone", "telephone", libraries[0]);
console.log(telephone);

/**
 * fp functions are curried
 */
const address = get("[0].address");
console.log(address(libraries));

/**
 * get returns a value based on a compund path
 */
const compondname = get("libraries.1.name", source);
console.log(compondname);
