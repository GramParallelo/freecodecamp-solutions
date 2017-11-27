/* jshint esversion: 6 */
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let inv = [];
    arr1.forEach((thing) => {
                  inv[thing[1]] = thing[0];
    });
    arr2.forEach((thing) => {
                  inv[thing[1]] ? inv[thing[1]] += thing[0] : inv[thing[1]] = thing[0];
    });
    let invSort = Object.keys(inv).sort();
    let totalINV = invSort.map((current,index,array) => {
                                return [inv[current],current];
    });
    return totalINV;
}



inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
