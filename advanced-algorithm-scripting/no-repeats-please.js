/* jshint esversion:6 */
function permAlone(str) {

  //find all permutations -- functions taken from: http://www.graemeboy.com/string-permutations
 /*
  function combineChars (chars) {
    var permutations = [], words = [], firstChar;
    if (chars.length === 1) { // base case
        permutations.push(chars);
        return permutations;
    }
    firstChar = chars[0];
    chars = chars.substring(1,chars.length);
    words = combineChars(chars);
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length + 1; j++) {
            permutations.push(insertCharAt(words[i], firstChar, j));
        }
    }
    return permutations;
  }
  function insertCharAt(word, charIn, i) {
      var start = word.substring(0,i);
      var end = word.substring(i,word.length);
      return start + charIn + end;
  }
  /// end of copied functions.
  var all_perms = combineChars(str);
  */
  // Below taken from-- http://staff.roguecc.edu/JMiller/JavaScript/permute.html
  //permArr: Global array which holds the list of permutations
//usedChars: Global utility array which holds a list of "currently-in-use" characters
let permArr = [],
    usedChars = [];
function permute(input) {
  //convert input into a char array (one element for each character)
  let ch,
      chars = input.split("");
  for (let i = 0; i < chars.length; i++) {
    //console.log(permArr);
    //get and remove character at index "i" from char array
    ch = chars.splice(i, 1);
    //add removed character to the end of used characters
    usedChars.push(ch);
    //when there are no more characters left in char array to add, add used chars to list of permutations
    if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
    //send characters (minus the removed one from above) from char array to be permuted
    permute(chars.join(""));
    //add removed character back into char array in original position
    chars.splice(i, 0, ch);
    //remove the last character used off the end of used characters array
    usedChars.pop();
  }
}
  permute(str);
  let regex = /(.)\1+/g; //match any single character 1 or more times.
  return permArr.filter((value,index,permsArray) => {
                          return !value.match(regex); //return permutations with no repeats
         }).length;
}

permAlone('aab');
