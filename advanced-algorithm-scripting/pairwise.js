/* jshint esversion: 6 */
function pairwise(arr, arg) {
  let index = [],
      current;

  for (let i=0; i<arr.length; i++){
    for (let j = 0; j<arr.length; j++) {
      if (i!==j && arr[i] + arr[j] === arg){
        index.push(i);
        index.push(j);
        arr[i] = '';
        arr[j] = '';
      }
    }
  }

  return index.filter((value,index,array) => {
                        return array.indexOf(value)===index;
            }).reduce((pre, cur) => pre + cur , 0);

}

pairwise([1, 1, 1], 2);
