'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = str => {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    (i === 0 || str[i - 1] === ' ')
    ? output += str[i].toUpperCase()
    : output += str[i];
  }
  return output;
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(jadenCase('javaScript'), 'JavaScript');
assert.strictEqual(jadenCase('z'), 'Z');
assert.strictEqual(jadenCase(''), '');
// End of tests */
