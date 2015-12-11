[![Dependency Status](https://david-dm.org/dnode/dmongoskin.svg)](https://david-dm.org/dnode/dmongoskin)
[![devDependency Status](https://david-dm.org/dnode/dmongoskin/dev-status.svg)](https://david-dm.org/dnode/dmongoskin#info=devDependencies)

# Example
```javascript
let db = require('dmongoskin')('url', [
  ['examples', [
    [{ example: 1 }, { unique: true }]
  ]]
]);
```
