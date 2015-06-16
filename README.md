# node-custom-error
Custom Errors for NodeJS

## Installation
````
npm install node-custom-error
````
## Usage
````
var MyCustomError = require('node-custom-error');
function doSomethingBad() {
  throw new MyCustomError('It went bad!', 42);
}
````
OR
````
var MyCustomError = require('node-custom-error');
function doSomethingBad() {
  throw new MyCustomError(err, 'It went bad!', 42);
}
````
## Tests
````
npm test
````
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release
* 1.1.0 Added ability to add an optional body to error
* 1.1.1 Minor bug fixing
* 2.0.0 Added ability to assign another error to copy stackTrace from it 