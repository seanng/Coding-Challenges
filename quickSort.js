/* Implement quick sort. */

const swap = (array, current, target) => {
  let temp = array[target];
  array[target] = array[current];
  array[current] = temp;
};

const quickSort = (input) => {

  let pivot = input[input.length-1],
      wall = 0;

  input.forEach((el, i)=>{
    if (el < pivot) {
      swap(input, i, wall);
      wall++;
    }
  })
  swap(input, input.length-1, wall);

  if (wall === 0) {
    return input
  }

  let leftSub = input.slice(0, wall);
  let rightSub = input.slice(wall);

  return quickSort(leftSub).concat(quickSort(rightSub))
}

console.log(quickSort([4,7,6,5,5,9,4,7,3,1,2,9,3,9,1,2]))