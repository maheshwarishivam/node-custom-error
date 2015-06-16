/**
 * Created by shivam on 18/05/15.
 *
 * Usage:
 * var CustomError = require('node-custom-error');
 *
 * function doSomethingBad() {
 *  throw new CustomError('It went bad!', 42, 'There was an error processing your request');
 * }
 *
 *
 * OR
 *
 *
 *
 * function catchSomethingBad() {
 *  try {
 *    doSomethingBad();
 * } catch (err) {
 *  throw new CustomError(err, 42, 'There was an error processing your request');
 * }
 *
 */

'use strict';

module.exports = function CustomError(err, errorNumber, errorBody) {
  if(err instanceof Error) {
    //Error.captureStackTrace(err, this.constructor);
    this.stack = err.stack;
    this.message = err.name + " : " + err.message;
  } else {
    Error.captureStackTrace(this, this.constructor);
    this.message = err;
  }
  this.name = this.constructor.name;
  this.errorNumber = errorNumber;
  this.errorBody = (typeof errorBody != 'undefined')?errorBody:'';
};

require('util').inherits(module.exports, Error);
