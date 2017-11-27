/* jshint esversion: 6 */
function mutation(arr) {
  const first = arr[0].toLowerCase().split(''),
        second = arr[1].toLowerCase().split('');
  let   solution = true;

  second.forEach((letter) => {
        solution = first.indexOf(letter) === -1 ? false : solution;
  });

  return solution;
}

mutation(["hello", "neo"]);
