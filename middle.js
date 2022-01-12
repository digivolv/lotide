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

console.log(middle([1, 2, 4])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
