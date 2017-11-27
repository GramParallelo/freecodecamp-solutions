/* jshint esversion: 6 */
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  const insert = arr.push(num),
        sort = arr.sort((a,b) => {
                              return b < a;
        });
  return sort.indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 3, "");
