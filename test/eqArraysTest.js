const { eqArrays } = require("../eqArrays");
const { assert } = require("chai");
// const { assertEqual } = require("../assertEqual");

describe("#eqArrays", () => {
  it("returns true for ([1, 2, 3],[1, 2, 3])", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    const expectedResult = true;
    assert.strictEqual(result, expectedResult);
  });
  it("returns true for ([5], [5])", () => {
    const result = eqArrays([5], [5]);
    const expectedResult = true;
    assert.strictEqual(result, expectedResult);
  });

  it("returns true for ([],[])", () => {
    const result = eqArrays([], []);
    const expectedResult = true;
    assert.strictEqual(result, expectedResult);
  });
  it("returns false for arrays that don't match", () => {
    const result = eqArrays([1], []);
    const expectedResult = false;
    assert.strictEqual(result, expectedResult);
  });
});

//Uses manually created assertions created for learning purposes
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// // eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true?
// // eqArrays(["1", "2", "3"], ["1", "2", 3]);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
