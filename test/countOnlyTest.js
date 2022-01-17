const { countOnly } = require("../countOnly");
const { assert, expect } = require("chai");
// const { assertEqual } = require("../assertEqual");

describe("#countOnly", () => {
  it("Should return { Fang: 2, Jason: 1 }", () => {
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
      Fang: true,
    });

    const result = countOnly(firstNames, result1);
    const expectedResult = { Fang: 2, Jason: 1 };
    assert.deepEqual(result, expectedResult);
  });
  it("Should return { Fang: 2, Jason: 2 }", () => {
    const firstNames = ["Karl", "Jason", "Fang", "Fang", "Kavith", "Jason"];
    const result1 = countOnly(firstNames, {
      Jason: false,
      Fang: true,
    });

    const result = countOnly(firstNames, result1);
    const expectedResult = { Fang: 2 };
    assert.deepEqual(result, expectedResult);
  });
  it("Should return empty object", () => {
    const firstNames = ["Karl", "Jason", "Fang", "Fang", "Kavith", "Jason"];
    const result1 = countOnly(firstNames, {
      Jason: false,
      Fang: false,
    });

    const result = countOnly(firstNames, result1);
    const expectedResult = {};
    assert.deepEqual(result, expectedResult);
  });
});
//return only true values with

//Uses manually created assertions created for learning purposes
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
