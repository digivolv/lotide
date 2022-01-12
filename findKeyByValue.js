const assertEqual = function (actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};

const findKeyByValue = (tvShowList, show) => {
  let tvShowKeys = Object.keys(tvShowList);
  let tvShowValues = Object.values(tvShowList);
  for (key of tvShowKeys) {
    console.log(key);
    if (tvShowList[key] === show) {
      return key;
    }
    // console.log(tvShowValues);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
