# Set

### set

```js
set("0.manager", "Bob", libraries);
// 0: { manager: 'Bob' }
```

### update

```js
const libraryWithManagerUpperCase = update(
  "0.manager",
  manager => manager.toUpperCase(),
  libraryWithManager
);
// libraryWithManagerUpperCase: 0: { manager: 'BOB' };
```
