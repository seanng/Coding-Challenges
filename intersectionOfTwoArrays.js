/* jshint esversion: 6 *//*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

num1 = [1,2,3,4,5]
num2 = [1,2,3]

num1 = [2,2]
num2 = [1,2,2,1]

Note:
Each element in the result must be unique.
The result can be in any order. */

const intersection = (nums1, nums2, bool=false) => {
  let compare = false;
  let counter = 0;
  let rawArr = [];
  for (let i = 0; i < nums1.length; i++) {
    let elem = nums1[i];
    if (!compare) {
      if (elem === nums2[counter]) {
        compare = true;
        counter++;
        rawArr.push(elem);
      }
    } else {
      if (counter !== 0 && counter === nums2.length) {
        return [...new Set(rawArr)];
      }
      if (elem !== nums2[counter]) {
        compare = false;
        counter = 0;
        rawArr = [];
      }
      // if not an intersection,
      if (counter !== 0 && counter < nums2.length) {
        rawArr.push(elem);
        counter++;
      }
    }
  }
  if (compare) {
    return [...new Set(rawArr)];
  }
  if (!bool) {
    return intersection(nums2, nums1, true);
  }
  return null;
};

console.log(intersection([1,2,2,3,4,4,5,6,1], [2,2,3,4]));
console.log(intersection([2,2], [1,2,2,1]))