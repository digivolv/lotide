const middle = (array) => {
  let middleIndex = [];
  if (array.length <= 2) {
    return middleIndex;
  } else if (array.length % 2 === 0) {
    middleIndex.push(Math.ceil(array.length / 2));
    middleIndex.push(Math.ceil(array.length / 2) + 1);
  } else if (!(array.length % 2 === 0)) {
    middleIndex.push(Math.ceil(array.length / 2));
  }
  return middleIndex;
};

module.exports = { middle };
