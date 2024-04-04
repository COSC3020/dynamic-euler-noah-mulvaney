const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

// Euler's number to 20 decimal places
// https://en.wikipedia.org/wiki/E_(mathematical_constant)
let e_close_enough = 2.71828182845904523536;

// Test to make sure that as n increases, e(n) gives a closer approximation of e
let prev_err = 1;
for (let i = 1; i < 20; ++i) {
  let error = e_close_enough - e(i);
  assert(error < prev_err);
  prev_err = error;
}
