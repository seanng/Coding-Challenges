/* jshint esversion: 6 */
/*
You are given a list of size N, initialized with zeroes. You have to perform M operations on the list and output the maximum of final values of all the N elements in the list. For every operation, you are given three integers a,b and k and you have to add value k to all the elements ranging from index a to b (both inclusive).

Input:
First line will contain two integers N and M separated by a single space.
Next M lines will contain three integers a, b and k separated by a single space.
Numbers in list are numbered from 1 to N.

Output:
A number containing the maximum value in the updated list.

Sample input:
5 3
1 2 100
2 5 100
3 4 100

Sample output:
200

*/

const solution = (input) => {
  let max = 0;
  let lines = input.split('\n').slice(1);
  let arr = [];
  let indexHash = new Map();
  lines.forEach(line=>{
    let lineArr = line.split(' ');
    arr.push(lineArr[0], lineArr[1]);
  });
  // sort the array by asc.
  let set = [...new Set(arr.sort((a,b)=> a - b))];
  let result = new Array(set.length).fill(0);
  set.forEach((num, i)=>{
    indexHash.set(num, i);
  });
  lines.forEach(line=>{
    let aIndex = indexHash.get(line[0]);
    let bIndex = indexHash.get(line[1]);
    let k = line[2] * 1;
    for (let i = aIndex; i <= bIndex; i++) {
      result[i] += k;
      max = Math.max(max, result[i]);
    }
  });

  return max;

};