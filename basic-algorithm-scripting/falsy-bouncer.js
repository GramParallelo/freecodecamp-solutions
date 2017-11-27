/* jshint esversion: 6 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter((bounce) => {
    return  bounce ? true : false;
  });
}

bouncer([7, "ate", "", false, 9], "");
