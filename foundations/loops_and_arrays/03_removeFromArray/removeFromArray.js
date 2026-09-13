const removeFromArray = function(arr, ...theArgs) {
  for (let i = 0; i < arr.length; i++) {
    if (theArgs.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  } 

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

// removeFromArray([1, 4], 3, 2)
// [3, 2]
// [1, 2, 3, 4]