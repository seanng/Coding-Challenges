/*jshint esversion:6*/
/* --- Day 3: Squares With Three Sides ---

Now that you can think clearly, you move deeper into the labyrinth of hallways and office furniture that makes up this part of Easter Bunny HQ. This must be a graphic design department; the walls are covered in specifications for triangles.

Or are they?

The design document gives the side lengths of each triangle it describes, but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.

In a valid triangle, the sum of any two sides must be larger than the remaining side. For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.

In your puzzle input, how many of the listed triangles are possible?
*/



const solver = (str) => {
  let rows = str.split('\n'),
      count = 0;
  rows.forEach(row=>{
    let numbers = row.split('  ');
    numbers = numbers.filter(number=>number !== '');
    console.log(numbers);
    if (((Number(numbers[0]) + Number(numbers[1])) > Number(numbers[2])) && ((Number(numbers[1]) + Number(numbers[2])) > Number(numbers[0])) && ((Number(numbers[0]) + Number(numbers[2])) > Number(numbers[1])) && (numbers.length > 0)) {
      console.log('increment count',numbers, count);
      count++;
    }
  });
  return count;
};

