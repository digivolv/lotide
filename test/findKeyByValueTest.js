const { findKeyByValue } = require("../findKeyByValue");
const { assert, expect } = require("chai");
// const { assertEqual } = require("../assertEqual");

describe("#findKeyByValue", () => {
  it("Should return drama with {drama: 'The Wire'}", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedResult = "drama";
    assert.strictEqual(result, expectedResult);
  });
  it("Should return undefined with a show not found in object {drama: 'The'}", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The");
    const expectedResult = undefined;
    assert.strictEqual(result, expectedResult);
  });
});

////Uses manually created assertions created for learning purposes
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
