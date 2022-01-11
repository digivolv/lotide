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
  // console.log(doesThisPass);

  return doesThisPass
    ? console.log("✅✅✅ The two arrays are equivalent: " + doesThisPass)
    : console.log("🛑🛑🛑 The two arrays are not equivalent: " + doesThisPass);
};

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
//eqArrays(["1", "2", "3"], ["1", "1", "3"]); // => true?
//eqArrays(["1", "2", "3"], ["1", "2", 3]);
