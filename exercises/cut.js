'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = str => str.slice(2)
const cutLast = str => {
  const strLen = str.length
  return str.slice(0, strLen-2)
}
const cutFirstLast = str => {
  const strLen = str.length
  return str.slice(2, strLen-2)
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(cutFirst('javascript'),'vascript')
assert.strictEqual(cutLast('javascript'), 'javascri')
assert.strictEqual(cutFirstLast('javascript'), 'vascri')
// End of tests */
