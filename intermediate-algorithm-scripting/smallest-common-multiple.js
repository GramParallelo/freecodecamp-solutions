/* jshint esversion: 6 */
function smallestCommons(arr) {
  let _arrSorted = arr.sort(),
      range = [];

  for (let i = _arrSorted[0]; i <= _arrSorted[1]; i++){
        range.push(i);
  }

  function gcd(a,b){
     return !b ? a : gcd(b, a % b);
  }
  function lcm(a,b) {
     return Math.abs(a*b)/gcd(a,b);
  }

  let multiple = _arrSorted[0];

  range.forEach((n) => {
         multiple = lcm(multiple, n);
  });

  return multiple;
}


smallestCommons([5,1]);
