/* jshint esversion: 6 */
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let _arrNew = [];
  arr.filter((e) => {
    if ( Array.isArray(e) ) {
      _arrNew = _arrNew.concat(steamroller(e));
    }
    else {
      _arrNew.push(e);
    }
  });
  return _arrNew;
}

steamroller([1, [2], [3, [[4]]]]);
