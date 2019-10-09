'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = str => {
  const lowStr = str.toLowerCase()
  return `*${lowStr}*`
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('A'), '*a*');
assert.strictEqual(whisper('aABsjkqj'), '*aabsjkqj*');
assert.strictEqual(whisper(''), '**');
// End of tests */
