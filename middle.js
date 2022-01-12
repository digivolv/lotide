const middle = (array) => {
  let middleIndex = [];

  if (array.length % 2 === 0) {
    middleIndex.push(Math.ceil(array.length / 2));
    middleIndex.push(Math.ceil(array.length / 2) + 1);
  } else if (!(array.length % 2 === 0)) {
    middleIndex.push(Math.ceil(array.length / 2));
  }
  console.log(middleIndex);
  return middleIndex;
};

middle([1, 2, 4]);
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
