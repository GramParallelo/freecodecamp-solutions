function palindrome(str) {
  /*
  first draft:

  // Good luck!

  var poo = str.toLowerCase();
  var foo = poo.replace(/[ ~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
  return foo === foo.split('').reverse().join('');

  */

  //Update to ES6
  let poo = str.toLowerCase();
  let foo = poo.replace(/[ ~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
  return foo === foo.split('').reverse().join('');
}



palindrome("eye");
