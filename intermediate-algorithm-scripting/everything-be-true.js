/* jshint esversion: 6 */
function truthCheck(collection, pre) {
  // Is everyone being true?
  let truthy = true;
  for (let i=0; i<collection.length; i++){

    if(!collection[i].hasOwnProperty(pre) || !collection[i][pre]){
      truthy = false;
    }

  }
  return truthy;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
