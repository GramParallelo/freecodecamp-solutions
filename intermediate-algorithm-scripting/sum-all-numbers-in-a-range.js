/* jshint esversion: 6 */
function sumAll(arr) {
  const min = Math.min(arr[0],arr[1]),
        max = Math.max(arr[0],arr[1]);
  return (1+max)*(max/2)-(1+(min-1))*((min-1)/2);
}

sumAll([5, 10]);
