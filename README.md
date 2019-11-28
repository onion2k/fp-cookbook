# A cookbook for Lodash FP

Common patterns for using Lodash/FP

## What is this?

FP-Cookbook is a collection of examples of how to use Lodash/FP.

### Lodash FP documentation

Official FP guide: [lodash/fp guide](https://github.com/lodash/lodash/wiki/FP-Guide)
jfmengels' Lodash FP docs: [lodash-fp-docs](https://gist.github.com/jfmengels/6b973b69c491375117dc)

## Example

```js
const library = {
  name: "Branch 1",
  address: "Station Road",
  bookcount: 3000
};

const name = get("name", library);
// name: Branch 1
```

## Table of Contents

- [Getting](./recipes/get.md)
- [Setting and Updating](./recipes/set.md)
- [Collections and Iterators](./recipes/iteration.md)
- [Series of operations](./recipes/flow.md)
