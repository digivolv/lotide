const assertArraysEqual = (arrayOne, arrayTwo) => {
  let doesThisPass = true;
  // ===
  //== for null / undefined false values
  //check array lengths are equal

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

const letterPositions = (sentence) => {
  const results = {};
  // stripped = sentence.replace(/\s/g, "");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
      console.log("results[sentence[i]]: " + results[sentence[i]]);
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(letterPositions("lighthouse in the house").h);
module.exports = { letterPositions };
