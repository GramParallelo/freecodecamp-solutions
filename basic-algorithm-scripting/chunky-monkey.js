/* jshint esversion: 6 */
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let solution = [];
  for (let i = 0; i < arr.length; i+=size){
    solution.push(arr.slice(i,i+size));
  }
  return solution;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
