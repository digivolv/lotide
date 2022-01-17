const { assertEqual } = require("../assertEqual");
const { tail } = require("../tail");

//An array with only one element should yield an empty array for its tail
//assertEqual(tail(["3"]), ["3"]);
//An empty array should yield an empty array for its tail

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // check same length
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

//assertEqual(tail(["1", "2", "3"]), ["2", "4"]);
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
