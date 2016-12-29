/* jshint esversion:6 */
/* A Discrete Mathematics professor has a class of N students. Frustrated with their lack of discipline, he decides to cancel class if fewer than K students are present when class starts.

Given the arrival time of each student, determine if the class is canceled.

The first line of input contains T, the number of test cases.

Each test case consists of two lines. The first line has two space-separated integers, N (students in the class) and K (the cancelation threshold). The second line contains N space-separated integers (a1, a2, ...aN) describing the arrival times for each student.

Note: Non-positive arrival times (aI <= 0) indicate the student arrived early or on time; positive arrival times (aI > 0) indicate the student arrived aI minutes late.

For each test case, print the word YES if the class is canceled or NO if it is not.


Sample

Input:
2
4 3
-1 -3 4 2
4 2
0 -1 2 1

Output:
YES
NO

*/

const solution = (fnInput) => {
  const testCases = fnInput.split('\n')[0];
  let inputArr = fnInput.split('\n').slice(1);
  let res = '';

  for (let i = 0; i < inputArr.length; i+=2) {
    // Threshold
    let K = inputArr[i].split(' ')[1];

    let students = inputArr[i+1].split(' ');
    let lateStudents = students.reduce((n, b)=>{
      (n > 0) && b++;
    }, 0);

    res += (lateStudents >= K) ? 'YES\n' : 'NO\n';

  }

  return res.slice(-2);
};