const countOnly = function (allItems, itemsToCount) {
  const returnObj = {};

  for (const item of allItems) {
    // console.log(itemsToCount[item]);
    if (itemsToCount[item]) {
      if (returnObj[item]) {
        returnObj[item] += 1;
      } else {
        returnObj[item] = 1;
      }
    }
  }
  return returnObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);

module.exports = { countOnly };
