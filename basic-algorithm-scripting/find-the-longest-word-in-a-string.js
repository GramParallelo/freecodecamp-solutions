/* jshint esversion: 6 */
function findLongestWord(str) {
 let _str = str.split(" ");
 let longest = 0;
 let word = null;

   _str.forEach((_str) => {
       if (longest < _str.length) {
           longest = _str.length;
           word = _str;
       }
   });

return word.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
