const assertArraysEqual = (arrayOne, arrayTwo) => {
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

  return doesThisPass
    ? console.log("✅✅✅ The two arrays are equivalent: " + doesThisPass)
    : console.log("🛑🛑🛑 The two arrays are not equivalent: " + doesThisPass);
};

const without = (sourceArray, itemsToRemove) => {
  let withoutArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      console.log("i:" + i + " j: " + j);
      if (
        sourceArray[i] !== itemsToRemove[j] &&
        !withoutArray.includes(sourceArray[i])
      ) {
        withoutArray.push(sourceArray[i]);
        console.log("withoutArray:" + withoutArray);
      }
    }
  }
  return withoutArray;
};

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
//eqArrays(["1", "2", "3"], ["1", "1", "3"]); // => true?
//eqArrays(["1", "2", "3"], ["1", "2", 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, without(words, ["lighthouse"]));
