const assertEqual = function (actual, expected) {
  let doesThisPass = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(
        `✅✅✅ Assertion Passed at index ${i}: ${actual[i]} === ${expected[i]}`
      );
    } else if (actual[i] !== expected[i]) {
      console.log(
        `🛑🛑🛑 Assertion Failed at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
      doesThisPass = false;
    }
  }
  if (doesThisPass === true && actual.length > 1) {
    console.log(`✅✅✅ Assertion Passed at all indexes`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed one or more indexes`);
  }
  return actual === expected;
};

const tail = (givenArray) => {
  return givenArray.slice(1);
};

//An array with only one element should yield an empty array for its tail
//assertEqual(tail(["3"]), ["3"]);
//An empty array should yield an empty array for its tail
assertEqual(tail(["Light", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

//assertEqual(tail(["1", "2", "3"]), ["2", "4"]);
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
