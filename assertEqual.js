const assertEqual = function(actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
//Non-identical Numbers
assertEqual(1, 0);
//Identical Numbers
assertEqual(1, 1);
//Identical string
assertEqual("Edwin", "Edwin");
//Non-identical string
assertEqual("Edwin", "Edwina");
