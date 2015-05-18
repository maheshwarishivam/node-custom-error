/**
 * Created by shivam on 18/05/15.
 *
 * Usage:
 * var CustomError = require('node-custom-error');
 *
 * function doSomethingBad() {
 *  throw new CustomError('It went bad!', 42);
 * }
 */

'use strict';

module.exports = function CustomError(message, errorNumber) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.errorNumber = errorNumber;
};

require('util').inherits(module.exports, Error);
