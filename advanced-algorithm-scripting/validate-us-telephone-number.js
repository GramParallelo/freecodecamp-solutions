function telephoneCheck(str) {
  // Good luck!
  return /^(1?) ?(\([0-9]{3}\)|[0-9]{3})(-| ?)([0-9]{3})( |-?)[0-9]{4}$/.test(str);
}



telephoneCheck("555-555-5555");
