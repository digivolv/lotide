const assertEqual = function (actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};

const eqObjects = (objOne, objTwo) => {
  // let result = true;
  let objOneKey = Object.keys(objOne);
  // let objOneValue = Object.values(objOne);
  let objTwoKey = Object.keys(objTwo);
  // let objTwoValue = Object.values(objTwo);

  console.log("objOneKey: (an array) " + objOneKey);
  console.log("objTwoKey: (an array)" + objTwoKey);
  //compare keys
  if (objOneKey.length !== objTwoKey.length) {
    return false;
  }

  //checks to see if key property values are the same at same key of each object
  for (const key in objOneKey) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
};

const randomObjA = { a: 1, b: 2, c: 3 };
const randomObjB = { a: 1, b: 2, c: 3 };
const randomObjC = { a: 1, b: 1, c: 5 };
const randomObjD = { be: 1, wb: 1, ca: 5 };

assertEqual(eqObjects(randomObjA, randomObjB), true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
