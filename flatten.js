const flatten = (nestedArrays) => {
  let flattenedArray = [];
  for (let k = 0; k < nestedArrays.length; k++) {
    if (Array.isArray(nestedArrays[k])) {
      for (let l = 0; l < nestedArrays[k].length; l++) {
        flattenedArray.push(nestedArrays[k][l]);
      }
    } else {
      flattenedArray.push(nestedArrays[k]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

module.exports = { flatten };
