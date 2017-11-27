/* jshint esversion: 6 */
function myReplace(str, before, after) {
  const _str = str.split(" "),
        _before = before.split(""),
        _after = after.split("");
  if ( _before[0] === _before[0].toUpperCase()){
       _after[0] =_after[0].toUpperCase();
  }

 return str.replace(_before.join(""),_after.join(""));
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
