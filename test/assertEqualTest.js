const { assertEqual } = require("../assertEqual");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
//Non-identical Numbers
assertEqual(1, 0);
//Identical Numbers
assertEqual(1, 1);
//Identical string
assertEqual("Edwin", "Edwin");
//Non-identical string
assertEqual(assertEqual("Edwin", "Edwina"), false);
