/* Given a binary tree, print from bottom to top, and left to right.
input:
{
    value: value,
    left: {
        value: value,
        left: {},
        right: {}
    },
    right:{
    }
}

output: array


       1
    2     3
        6   7

       1
    2     3
  4   5 6   7

  1 3 2 7 6 5 4

  o/p : 4 5 6 7 2 3 1

      1

  */


  const solution = (root) => {
      let retVal = [];
      let queue = [root];
      let pointer = 0;
      while (pointer < queue.length) {
          queue[pointer].right && queue.push(queue[pointer].right);
          queue[pointer].left && queue.push(queue[pointer].left);
          pointer++;
      }

      for (let i = queue.length - 1; i >= 0; i--) {
          retVal.push(queue[i].value);
      }
      console.log(retVal);
      return retVal;

  }
