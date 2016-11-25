/* jshint esversion: 6*/
/*
 * Given a matrix, return all diagonals.
 *
 *    Input:    |  Output:
 * -------------+-------------
 * [[10,11,12], | [[13],
 *  [13,14,15]] |  [10,14],
 *              |  [11,15],
 *              |  [12],
 *              |  [10],
 *              |  [11,13],
 *              |  [12,14],
 *              |  [15]]
 * -------------+-------------
 * [[10,11],    | [[14],
 *  [12,13],    |  [12,15],
 *  [14,15]]    |  [10,13],
 *              |  [11],
 *              |  [10],
 *              |  [11,12],
 *              |  [13,14],
 *              |  [15]]
 * -------------+-------------
 * [[10,11,12], | [[16],
 *  [13,14,15], |  [13,17],
 *  [16,17,18]] |  [10,14,18],
 *              |  [11,15],
 *              |  [12],
 *              |  [10],
 *              |  [11,13],
 *              |  [12,14,16],
 *              |  [15,17],
 *              |  [18]]

 input: 2D array

 output: 2D array - in each element you would have a combination of right diagonals and then left diagonals,
    1. starting with the bottom left, ending on the top right
    2. starting with the top left and then end on the bottom right
    3. top to bottom each time.

 constraints: no time constraints

 edge case: not a 2D array? array elements might not be an array i.e. object or number or string??

 [[10]] -> [[10], [10]]
 [[100, 10, 20]] -> [[100], [10], [20], [100], [10], [20]]

 */

const allDiagonals = matrix => {

};