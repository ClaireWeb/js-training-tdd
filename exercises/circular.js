'use strict';

/*
 * Create an object named `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code:
const circular = {
  circular: this.circular,
  get circular() {
    return circular
  }
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof circular, 'object');
assert.strictEqual(circular.circular, circular);
assert.strictEqual(circular.circular.circular, circular);
assert.strictEqual(circular.circular.circular.circular, circular);
assert.strictEqual(circular.circular.circular.circular.circular, circular);
// End of tests */
