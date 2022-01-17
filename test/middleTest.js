// const { assertArraysEqual } = require("../assertArraysEqual");
const { middle } = require("../middle");
const { assert, expect } = require("chai");
const { assertArraysEqual } = require("../assertArraysEqual");

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const result = middle[1];
    const expectedResult = undefined;
    assert.deepEqual(result, expectedResult);
  });
  it("returns [] for [1, 2]", () => {
    const result = middle[(1, 2)];
    const expectedResult = undefined;
    assert.deepEqual(result, expectedResult);
  });
  it("returns [2] for [1, 2, 3]", () => {
    const result = middle([1, 2, 3]);
    const expectedResult = [2];
    assert.deepEqual(result, expectedResult);
  });
  it("returns [[2, 3]] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    const expectedResult = [2, 3];
    assert.deepEqual(result, expectedResult);
  });
  it("returns [] for []", () => {
    const result = middle([]);
    const expectedResult = [];
    assert.deepEqual(result, expectedResult);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    const expectedResult = [2, 3];
    assert.deepEqual(result, expectedResult);
  });
});

//Uses manually created assertions created for learning purposes
// assertArraysEqual(middle([1, 2, 4]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
