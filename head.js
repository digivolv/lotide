const head = (givenArray) => {
  return givenArray[0];
};

const assertEqual = function (actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//array with only one element
assertEqual(head(["Hello"]), "Hello");
///empty array
assertEqual(head([]), "Hello");
