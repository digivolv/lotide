const findKeyByValue = (tvShowList, show) => {
  //let tvShowKeys = Object.keys(tvShowList);
  for (const key in tvShowList) {
    if (tvShowList[key] === show) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

module.exports = { findKeyByValue };
