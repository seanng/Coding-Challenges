/*jshint esversion:6 */

/* Jesse loves cookies. He wants the sweetness of all his cookies to be greater than value K. To do this, Jesse repeatedly mixes two cookies with the least sweetness. He creates a special combined cookie with:

sweetness = (1 * Least sweet cookie + 2 * 2nd least sweet cookie).

He repeats this procedure until all the cookies in his collection have a sweetness > K.

You are given Jesse's cookies. Print the number of operations required to give the cookies a sweetness > k. Print -1 if this isn't possible.

Sample input:
6 7
1 2 3 9 10 12

Sample output:
2

*/

function solution(string) {
  //Enter your code here
  string = string.split('\n');
  // k = min sweetness of cookie.
  let k = string[0].split(' ')[1] * 1;
  let cookies = string[1].split(' ').map(e=>Number(e));
  let count = 0;

  let innerRecursion = (k, cookies) => {
    if (cookies.length === 1 && cookies[0] <= k) {
      return -1;
    }
    cookies.sort((a,b)=>b-a);
    let blandest = cookies[cookies.length-1];
    let secondBlandest = cookies[cookies.length-2];
    if (blandest <= k) {
      let temp = blandest + (secondBlandest * 2);
      cookies.pop();
      cookies.pop();
      cookies.push(temp);
      count++;
      return innerRecursion(k, cookies);
    }
  };

  innerRecursion(k, cookies);
  return count;
}
