/* jshint esversion: 6 */
function checkCashRegister(price, cash, cid) {
  let change = cash - price,
      changeDue = change,
      _change = [],
      reverseCID = cid.reverse();

  let totalCID = parseFloat(cid.reduce((previous,current) => {
                                          return previous + current[1];
                 },0).toFixed(2)); //if initial value not set typeof previous === string ??wussupwitdat??

  let values = [100,20,10,5,1,0.25,0.10,0.05,0.01],
      times,
      value,
      _cid,
      cashback;
  //highest to lowest, if there is enough cid, give(push) cashback of value then update cashback left.
  for (let i=0; i<reverseCID.length; i++){
        value = values[i];
        times = Math.floor(changeDue/value); //to test if value can be given as cashback.
        _cid = reverseCID[i][1];

        if ( times>=1 && _cid*100>=(changeDue*100)/(value*100) ) {
            // make sure there is enough cid.
            while( times*value > _cid ){
              times = times-1;
            }
            cashback = times*value;
            _change.push( [reverseCID[i][0], cashback]);
           changeDue = parseFloat( (changeDue - cashback).toFixed(2) );
        }
  }

  if ( totalCID === change) {
    return "Closed";
  }
  if ( totalCID < change || _change.length === 0) {
    return "Insufficient Funds";
  }

  return _change;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
