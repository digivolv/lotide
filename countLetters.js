const assertEqual = function (actual, expected) {
  console.log(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return actual === expected;
};

const countLetters = (sentence) => {
  let count = {};

  for (const letter of stripped) {
    console.log(letter);
    if (count[letter]) {
      count[letter] += 1;
    }
    if (!count[letter]) {
      count[letter] = 1;
    }
  }
  return count;
};

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
