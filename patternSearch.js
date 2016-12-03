/* jshint esversion: 6 */

const answer = (input) => {
  let string = input.split('\n')[1];
  let pattern = input.split('\n')[2];
  let endCount = input.split('\n')[0].split(' ')[1];

  console.log(endCount, pattern, string);

  let count = 0;
  let result = 0;

  // for (let i in string) {
  //   string[i]
  // }
};

console.log(answer('20 4\n ABCDABCD\n ABCD'))