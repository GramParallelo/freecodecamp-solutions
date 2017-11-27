/* jshint esversion: 6 */
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.filter((e) => {if(arr2.indexOf(e)<0){
    newArr.push(e);
  }});
  arr2.filter((e) => {if(arr1.indexOf(e)<0){
    newArr.push(e);
  }});

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
