// Mini test suite for our custom error
 
var assert = require('assert');
var CustomError = require('./customerror.js');
 
function doSomethingBad() {
  throw new CustomError('It went bad!', 42, 'There was an error processing your request');
}

function catchSomethingBad() {
  try {
    doSomethingBad();
  } catch(err) {
    throw new CustomError(err, 43, 'Oops! There was an error processing your request!');
  }
}
try {
  catchSomethingBad();
} catch (err) {
  // The name property should be set to the error's name
  assert(err.name = 'CustomError');
 
  // The error should be an instance of its class
  assert(err instanceof CustomError);
 
  // The error should be an instance of builtin Error
  assert(err instanceof Error);
 
  // The error should be recognized by Node.js' util#isError
  assert(require('util').isError(err));
 
  // The error should have recorded a stack
  assert(err.stack);

  // toString should return the default error message formatting
  assert.strictEqual(err.toString(),
                     'CustomError: CustomError : It went bad!');
 
  // The stack should start with the default error message formatting
  assert.strictEqual(err.stack.split('\n')[0],
                     'CustomError: It went bad!');
 
  // The first stack frame should be the function where the error was originally thrown.
  assert.strictEqual(err.stack.split('\n')[1].indexOf('doSomethingBad'), 7);

  //The second stack frame should be the function where it was thrown again.
  assert.strictEqual(err.stack.split('\n')[2].indexOf('catchSomethingBad'), 7);
 
  // The extra property should have been set
  assert.strictEqual(err.errorNumber, 43);
  assert.strictEqual(err.errorBody, 'Oops! There was an error processing your request!');
}
 
// Spoiler: It passes!
