const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `✅✅✅ Assertion Passed - All index values in the arrays match!`
    );
    return true;
  } else if (actual !== expected) {
    console.log(
      `🛑🛑🛑 Assertion Failed - Not all index values in the arrays match!`
    );
    return false;
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  let doesThisPass = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      console.log(
        `✅ Assertion Passed at index ${i}: ${arrayOne[i]} === ${arrayTwo[i]}`
      );
    } else if (arrayOne[i] !== arrayTwo[i]) {
      console.log(
        `🛑 Assertion Failed at index ${i}: ${arrayOne[i]} !== ${arrayTwo[i]}`
      );
      doesThisPass = false;
    }
  }
  console.log(doesThisPass);
  return doesThisPass;
};

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true?
//eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
