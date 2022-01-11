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
  // console.log(doesThisPass);

  return doesThisPass
    ? console.log("✅✅✅ The two arrays are equivalent: " + doesThisPass)
    : console.log("🛑🛑🛑 The two arrays are not equivalent: " + doesThisPass);
};

const flatten = (nestedArrays) => {
  let flattenedArray = [];
  for (let k = 0; k < nestedArrays.length; k++) {
    if (Array.isArray(nestedArrays[k])) {
      for (let l = 0; l < nestedArrays[k].length; l++) {
        flattenedArray.push(nestedArrays[k][l]);
      }
    } else {
      flattenedArray.push(nestedArrays[k]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
