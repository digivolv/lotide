// const { assertEqual } = require("../assertEqual");
const { head } = require("../head");
const { assert } = require("chai");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const result = head([1, 2, 3]);
    const expectedResult = 1;
    assert.strictEqual(result, expectedResult);
  });
  it("returns '5' for ['5']", () => {
    const result = head(["5"]);
    const expectedResult = "5";
    assert.strictEqual(result, expectedResult);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = head(["Hello", "Lighthouse", "Labs"]);
    const expectedResult = "Hello";
    assert.strictEqual(result, expectedResult);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = head(["Hello", "Labs"]);
    const expectedResult = "Hello";
    assert.strictEqual(result, expectedResult);
  });
  it("returns undefined for []", () => {
    const result = head([]);
    const expectedResult = undefined;
    assert.strictEqual(result, expectedResult);
  });
});

//Uses manually created assertions created for learning purposes
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// //array with only one element
// assertEqual(head(["Hello"]), "Hello");
// ///empty array
// assertEqual(head([]), "Hello"); //false
