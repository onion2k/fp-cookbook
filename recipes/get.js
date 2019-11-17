const fp = require('lodash/fp');
const libraries = require('../libraries.json');

const { get, getOr } = fp;

/**
 * get returns a value based on a path
 */
const name = get('libraries[0].name', libraries);
console.log(name);

/**
 * getOr can return a value if the fetch is falsy
 */
const telephone = getOr('No Telephone', 'libraries[0].telephone', libraries);
console.log(telephone);

/**
 * fp functions are curried
 */
const address = get('libraries[0].address');
console.log(address(libraries));
