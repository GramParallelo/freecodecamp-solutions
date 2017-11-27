/* jshint esversion: 6 */
function convertHTML(str) {
  // &colon;&rpar;
  const entities = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};
  let reg,
      _strNew = str,
      a = [];

  for (let prop in entities){
      reg = new RegExp(prop,'g');
      _strNew = _strNew.replace(reg,entities[prop]);

  }
  //if (str.match(reg)){
  //    return str.replace(reg,entities[prop])
  //  }
  //a.push(str.replace(reg,entities[prop]))
  return _strNew;
}

convertHTML("Sixty > twelve");
