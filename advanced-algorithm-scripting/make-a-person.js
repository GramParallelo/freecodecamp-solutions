/* jshint esversion: 6 */
var Person = function(firstAndLast) {
    let full = firstAndLast,
        first = full.split(" ")[0],
        last = full.split(" ")[1];
    this.getFullName = function() {
                              return full;};
    this.getFirstName = function() {
                              return full.split(" ")[0];};
    this.getLastName = function() {
                              return full.split(" ")[1];};
    this.setFullName = function(_full) {
                              full = _full;
    };
    this.setFirstName = function(_first) {
                              full = _first + " " + last;
    };
    this.setLastName = function(_last) {
                              full = first + " " + _last;
    };
};


// not sure why but the test only pass if var is used for the constructor even though the console outputs correctly.
var bob = new Person('Bob Ross');

bob.getFirstName();
