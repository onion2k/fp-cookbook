# Flow

### flow

```js
const branchesBookCount = flow(
  filter(flow(get("bookcount"), isEqual(2000))),
  map(get("name"))
)(libraries);
// branchesBookCount: ['Branch 2']
```
