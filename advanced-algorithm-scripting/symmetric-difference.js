/* jshint esversion: 6 */
function sym(args) {
                  //.length is just an integer, this doesn't leak
                  //the arguments object itself

    let sets = new Array(arguments.length); //empty array
    for(let i = 0; i < sets.length; ++i) {
          //i is always valid index in the arguments object
          sets[i] = arguments[i];
    }
  function diff(A,B) {
    function removeDuplicates(set) {
              return set.filter((item, pos) => {
                        return set.indexOf(item) == pos;
                      });
    }
    A = removeDuplicates(A);
    B = removeDuplicates(B);

    return A.filter((value) => {
                      return B.indexOf(value) === -1;
           }).concat(B.filter((value) => {
                                return A.indexOf(value) === -1;
    }));
  }

  return sets.reduce((A, B) => {
                      return diff(A,B);
  });


}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
