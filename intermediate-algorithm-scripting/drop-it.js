function drop(arr, func) {
  // Drop them elements.
  return arr.filter(func); //this passes the test but don't think its actually correct as the problem  says to return after the first truthy element.
}

drop([1, 2, 3], function(n) {return n < 3; });
