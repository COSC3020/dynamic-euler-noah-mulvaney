const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

let e_close_enough = e(1000000);

let prev_err = 1;
for (let i = 1; i < 10; ++i) {
  let error = e_close_enough - e(i);
  assert(error < prev_err);
  prev_err = error;
}
