/* jshint esversion: 6 */
function convertToRoman(num) {
  // + is the unary operator - forceful type coercion - to make sure typeof num === Number
  if (!+num) {
        return false;
  }
    let digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--) {
        // single digits + corresponding key values + previous computation
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    }
          // creates an Array of length (+digits.join("") + 1) to represent the right amount of M=1000
    return Array(+digits.join("") + 1).join("M") + roman;

}
