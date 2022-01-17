const { countOnly } = require("../countOnly");
const { assert, expect } = require("chai");
// const { assertEqual } = require("../assertEqual");

describe("#countOnly", () => {
  it("returns [] for [1]", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    const result = countOnly(firstNames, result1);
    const expectedResult = 2;
    assert.deepEqual(result, expectedResult);
  });
  it("returns [] for [1, 2]", () => {
    const firstNames = ["Karl", "Salima", "Jason", "Fang", "Kavith", "Jason"];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Fang: false,
    });

    const result = countOnly(firstNames, result1);
    const expectedResult = 1;
    assert.deepEqual(result, expectedResult);
  });
});
//return only true values with

//Uses manually created assertions created for learning purposes
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
