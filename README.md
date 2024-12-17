# thoughtful-exercise

This is a coding challenge for Thoughtful AI. The code is written in JavaScript as a small Node.js application.

### Installation ###

`npm install`: Installs dependencies.

### Running ###

The code is contained in the index.js file, with just one function:

`sort(width, height, length, mass)`

The function will return/throw one of four outcomes:

`REJECTED`: 
- `width` * `height` * `length` >= 1,000,000 __and__
- `mass` >= 20

`SPECIAL`:
- `width` * `height` * `length` >= 1,000,000 __xor__
- `mass` >= 20

`STANDARD`:
- `width` * `height` * `length` < 1,000,000 __and__
- `mass` < 20

`Error`
- Invalid input

### Testing ###

`npm test` will run a battery of Jest unit tests on the `sort()` function.

### Documentation ###

`npm run docs` will generate HTML documentation in the `docs` directory.
