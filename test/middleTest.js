// const { assertArraysEqual } = require("../assertArraysEqual");
const { middle } = require("../middle");
const { assert, expect } = require("chai");
const { assertArraysEqual } = require("../assertArraysEqual");

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle[1], undefined);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle[(1, 2)], undefined);
  });
  it("returns [2] for [1, 2, 3]", () => {
    // console.log("this works");
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [[2, 3]] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
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
