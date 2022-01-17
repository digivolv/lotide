const { letterPositions } = require("../letterPositions");
const { assert, expect } = require("chai");

describe("#findKeyByValue", () => {
  it("Should return { l: [ 0, 2 ], o: [ 1 ] } with 'lol'", () => {
    const result = letterPositions("lol");
    const expectedResult = { l: [0, 2], o: [1] };

    assert.deepEqual(result, expectedResult);
  });
  it("Should return undefined with a show not found in object {drama: 'The'}", () => {
    const result = letterPositions("room");
    const expectedResult = { r: [0], o: [1, 2], m: [3] };
    assert.deepEqual(result, expectedResult);
  });
});

/////Uses manually created assertions created for learning purposes
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(
//   assertArraysEqual(
//     letterPositions("lighthouse in the house").h,
//     [3, 5, 15, 18]
//   )
// );
