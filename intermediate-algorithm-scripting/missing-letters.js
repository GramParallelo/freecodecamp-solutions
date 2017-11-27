/* jshint esversion: 6 */
function fearNotLetter(str) {
  const _str = str.split(''),
        code = _str[0].charCodeAt();
  for (let i = 0; i<_str.length; i++) {
    if ( _str[i].charCodeAt() !== code + i){
      return String.fromCharCode(code+i);
    }
  }
}

fearNotLetter("abce");
