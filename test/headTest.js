// const { assertEqual } = require("../assertEqual");
const { head } = require("../head");
const { assert } = require("chai");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

//Uses manually created assertions created for learning purposes
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// //array with only one element
// assertEqual(head(["Hello"]), "Hello");
// ///empty array
// assertEqual(head([]), "Hello"); //false
