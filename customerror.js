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

module.exports = function CustomError(errorMessage, errorNumber, errorBody) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = errorMessage;
  this.errorNumber = errorNumber;
  this.errorBody = (typeof errorBody != 'undefined')?errorBody:'';
};

require('util').inherits(module.exports, Error);
