const { eqObjects } = require("../eqObjects");
const { assert, expect } = require("chai");

describe("#eqObjects", () => {
  it("Should return true with matching objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    const result = eqObjects(cd, dc);
    const expectedResult = true;
    assert.deepEqual(result, expectedResult);
  });
  it("Should return true with nonmatching objects", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    const result = eqObjects(cd, cd2);
    const expectedResult = false;
    assert.deepEqual(result, expectedResult);
  });
});

//Uses manually created assertions created for learning purposes
/*
// assertEqual(eqObjects(randomObjA, randomObjB), true);
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// */
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
// // console.log(eqArrays(cd.d, cd2.d));
// //
