/* jshint esversion: 6 */
function uniteUnique(...args) {
  //const args = Array.prototype.slice.call(arguments); es6 way with spread operator ...args = arr1,arr2,arr3

  return args.reduce((previous,current,index,self)=>{
                return previous.concat(current);
                }).filter((value,index,self) => {
                    return self.indexOf(value) === index;
  });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
