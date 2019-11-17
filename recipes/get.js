const fp = require('lodash/fp');
const libraries = require('../libraries.json')

const { get } = fp;

const library = get('libraries[0].name', libraries)

console.log(library)