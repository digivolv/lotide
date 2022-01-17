const { assert } = require("chai");
const { flatten } = require("../flatten");

describe("#flattenTest", () => {
  it("returns [] for [1]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    const expectedResult = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(result, expectedResult);
  });
});
