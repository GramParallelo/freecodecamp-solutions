/* jshint esversion: 6 */
function sumFibs(num) {
  let previous = 0,
      current = 1,
      result = 0;
  while(current <= num){
    if (current%2!==0){
      result += current;
    }
    current += previous;
    previous = current - previous;
  }
  return result;
}

sumFibs(4);
