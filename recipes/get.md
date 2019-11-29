# Getting

How to get data from objects and arrays

All examples use libraries.json

### get returns a value based on a path

```js
const name = get("name", libraries[0]);
// name: Branch 1
```

### get returns a value based on a path with array syntax

```js
const nameFromArray = get("[0].name", libraries);
// nameFromArray: Branch 1
```

### get returns a value based on a path with object syntax

```js
const nameFromArrayAsObject = get("0.name", libraries);
// nameFromArrayAsObject: Branch 1
```

### getOr can return a value if the fetch is falsy

```js
const telephone = getOr("No Telephone", "telephone", libraries[0]);
// telephone: No Telephone
```

### fp functions are curried

```js
const getAddress = get("address");
const address = getAddress(library[0]));
// address: Branch 1

```

### get returns a value based on a compund path

```js
const compoundname = get("libraries[1].name", libraries);
// compoundname: Branch 2
```
