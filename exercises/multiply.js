'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:
const multiply = (num1, num2) => {
  let sum = 0;
  if (Math.sign(num1) === -1) {
    for (let i = 0; i < -num1; i++) {
      sum -= num2
    }
  } else if (Math.sign(num1) === -1 && Math.sign(num2) === -1) {
    for (let i = 0; i < -num1; i++) {
      sum += -num2
    }
  } else {
    for (let i = 0; i < num1; i++) {
      sum += num2
    }
  }
  return sum
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
