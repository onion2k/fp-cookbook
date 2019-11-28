# Getting

How to get data from objects and arrays

All examples use libraries.json

```js
/**
 * get returns a value based on a path
 */
const name = get("name", libraries[0]);
// name: Branch 1
```

```js
/**
 * get returns a value based on a path
 */
const name = get("[0].name", libraries);
// name: Branch 1
```

```js
/**
 * getOr can return a value if the fetch is falsy
 */
const telephone = getOr("No Telephone", "telephone", library);
// telephone: No Telephone
```

```js
/**
 * fp functions are curried
 */
const getAddress = get("address");
const address = getAddress(library[0]));
// address: Branch 1

```

```js
/**
 * get returns a value based on a compund path
 */
const compoundname = get("libraries[1].name", libraries);
// compoundname: Branch 2
```
