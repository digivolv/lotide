const assertEqual = function (actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};
/*
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let firstNameKeys = Object.keys(itemsToCount);
  // let firstNameBoolean = Object.values(itemsToCount);
  const returnObj = {};
  // console.log( "firstNameKeys: " + firstNameKeys + "\n itemsToCount: " + firstNameBoolean);
  for (firstNameKeys in itemsToCount) {
    //console.log(firstNameKeys);

    for (let i = 0; i < firstNames.length; i++) {
      if (
        firstNames[i] === firstNameKeys &&
        itemsToCount[firstNameKeys] === true
      ) {
        returnObj[firstNameKeys] = 0;
      }
    }
    for (let i = 0; i < firstNames.length; i++) {
      if (
        firstNames[i] === firstNameKeys &&
        itemsToCount[firstNameKeys] === true
      ) {
        returnObj[firstNameKeys] += 1;
      }
    }
  }
  console.log(returnObj);
  return returnObj;
};
*/

const countOnly = function (allItems, itemsToCount) {
  const returnObj = {};

  for (const item of allItems) {
    //  console.log(name);
    console.log(itemsToCount[item]);
    if (itemsToCount[item]) {
      if (returnObj[item]) {
        returnObj[item] += 1;
      } else {
        returnObj[item] = 1;
      }
    }
  }
  return returnObj;
};

//return only true values with
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

assertEqual(result1["Jason"], 1);

assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
