/* jshint esversion: 6 */
function largestOfFour(arr) {
  // You can do this!

  const solution = arr.map((ar) => {
      let largest = 0;
      ar.forEach((num) => {
        largest = num > largest ? num : largest;
      });
      return largest;
  });

  return solution;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");
