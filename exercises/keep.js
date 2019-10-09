'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = str => str.slice(0, 2)
const keepLast = str => str.slice(-2)
const keepFirstLast = str => str.slice(2, 4)
//* Begin of tests
const assert = require('assert');
assert.strictEqual(keepFirst('javascript'),'ja')
assert.strictEqual(keepLast('javascript'), 'pt')
assert.strictEqual(keepFirstLast('javascript'), 'va')
// End of tests */
