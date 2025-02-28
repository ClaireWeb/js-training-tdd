'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = str => str.toUpperCase()
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('a'), 'A');
assert.strictEqual(yell('aaa'), 'AAA');
assert.strictEqual(yell('Aaaa'), 'AAAA');
assert.strictEqual(yell(''), '');
// End of tests */
