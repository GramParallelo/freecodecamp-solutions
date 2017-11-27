/* jshint esversion: 6 */
function addTogether() {
  function isNumber(num) {
        if (typeof num !== 'number') {
          return undefined;
        } else
          return num;
  }
  let x = isNumber(arguments[0])?arguments[0]:undefined;
  let y = isNumber(arguments[1])?arguments[1]:undefined;
  if (!x) {
    return undefined;
  }
  else if (arguments.length > 1) {
    return  !y ? undefined : x + y;
  }
  else {
    return function () {
              let z = isNumber(arguments[0])?arguments[0]:undefined;
              return !z ? undefined : x + z;
            };
  }



}
