/* jshint esversion: 6 */
function titleCase(str) {
    const strArray = str.split(' '),
          titleCaseArray = strArray.map((word) => {
                                         let lword = word.toLowerCase();
                                         return lword.charAt(0).toUpperCase() + lword.slice(1);
                                        });

  return titleCaseArray.join(' ');
}

titleCase("I'm a little tea pot", "");
