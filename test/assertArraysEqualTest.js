const { assertArraysEqual } = require("../assertArraysEqual");

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
//eqArrays(["1", "2", "3"], ["1", "1", "3"]); // => true?
//eqArrays(["1", "2", "3"], ["1", "2", 3]);

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true?
//eqArrays(["1", "2", "3"], ["1", "2", 3]);
