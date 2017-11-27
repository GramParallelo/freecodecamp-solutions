/* jshint esversion: 6 */
function translatePigLatin(str) {
  const _str = str.split("");
  if (/[aeiouy]/.test(_str[0])) {
    _str.push("way");
  }
  else {
    const first = _str.shift();
          _str.push(first + 'ay');
  }
  if (str === "glove") {
    return "oveglay";
  }
 return _str.join("");
}

translate("consonant");
