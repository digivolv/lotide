const { head } = require("../head");
const { assertEqual } = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//array with only one element
assertEqual(head(["Hello"]), "Hello");
///empty array
assertEqual(head([]), "Hello"); //false
