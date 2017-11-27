/* jshint esversion: 6 */
function destroyer(arr) {
  // Remove all the values
  let args = Array.prototype.slice.call(arguments),
      thingsToDestroy = args[0];
  args.shift(0);
  return thingsToDestroy.filter((el) => {
    let noDestroy = true;
    for(let i = 0; i<args.length; i++){
      noDestroy = el === args[i] ? false : noDestroy;
    }
    return noDestroy;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
