# Array Remove Utils

`Array Remove Utils` is a lightweight library that enhances JavaScript arrays by adding additional utility methods like `remove`, `findAndRemove`, `clear`, and `isEmpty`. This package makes array manipulation simpler and more expressive.

## Installation

Install the package using npm or yarn:

```bash
npm install array-remove-utils
```

or

```bash
yarn add array-remove-utils
```

## Usage

Import the package in your project to extend the `Array.prototype` with the new methods:

```javascript
require('array-remove-utils');
```

### Methods

#### `remove(item)`
Removes the first occurrence of the specified item from the array.

```javascript
const arr = [1, 2, 3, 2];
arr.remove(2); // [1, 3, 2]
```

#### `findAndRemove(predicate)`
Finds the first element that matches the predicate and removes it from the array.

```javascript
const arr = [1, 2, 3, 4];
arr.findAndRemove(x => x % 2 === 0); // [1, 3, 4]
```

#### `clear()`
Removes all elements from the array.

```javascript
const arr = [1, 2, 3];
arr.clear(); // []
```

#### `isEmpty()`
Checks if the array is empty.

```javascript
const arr = [];
console.log(arr.isEmpty()); // true
```

## TypeScript Support
This package includes TypeScript definitions for all the new methods. Just import it in your TypeScript project:

```typescript
import 'array-remove-utils';

const arr: number[] = [1, 2, 3];
arr.remove(2);
console.log(arr.isEmpty());
```

## Best Practices
While extending native prototypes can be powerful, it can also lead to conflicts if other libraries modify `Array.prototype` in similar ways. Use this package with caution in shared environments.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and write tests.
4. Submit a pull request.

## Acknowledgements
This package is inspired by the need for intuitive array manipulation in JavaScript projects.

---

Enhance your arrays with `Array Remove Utils` and simplify your code today!

