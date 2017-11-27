/* jshint esversion: 6 */
function rot13(encodedStr) {
  let codeArr = encodedStr.split(""),  // String to Array
      decodedArr = []; // Your Result goes here
  // Only change code below this line
  let code;
  codeArr.map((str) => {
                code = str.charCodeAt(0);
                if(code >= 65 && code <= 90){
                  if (code - 13 < 65) {
                   return decodedArr.push(String.fromCharCode(str.charCodeAt(0)+13));
                  }
                  else {
                    return  decodedArr.push(String.fromCharCode(str.charCodeAt(0)-13));
                  }
                }
                else {
                  return decodedArr.push(str);
                }
  });


  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
