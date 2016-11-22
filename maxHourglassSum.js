/* jshint esversion: 6 */
/*
Input : 2D array
Output: Number (max sum of hourglass)
*/

function getMaxSum(array) {
  let result = 0;
  for (let i = 1; i < array.length-1; i++) {
    for (let j = 1; j < array[i].length-1; j++) {
      if (array[i-1][j-1] !== undefined && array[i+1][j+1] !== undefined && array[i-1][j+1] !== undefined && array[i+1][j-1] !== undefined){
        let sum = array[i][j] + array[i-1][j-1] + array[i-1][j] + array[i-1][j+1] + array[i+1][j-1] + array[i+1][j] + array[i+1][j+1];
        if (sum > result) { result = sum; }
      }
    }
  }
  return result;
}