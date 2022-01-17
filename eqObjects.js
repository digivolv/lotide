// const { assertEqual } = require("./assertEqual");
const { eqArrays } = require("./eqArrays");
const eqObjects = (objOne, objTwo) => {
  let objOneKey = Object.keys(objOne);

  let objTwoKey = Object.keys(objTwo);

  if (objOneKey.length !== objTwoKey.length) {
    return false;
  }

  for (const key of objOneKey) {
    if (Array.isArray(objOne[key])) {
      const eqArrayResults = eqArrays(objOne[key], objTwo[key]);
      // console.log("eqArrayResults:" + eqArrayResults);
      if (!eqArrayResults) {
        return false;
      }
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
};

module.exports = { eqObjects };
