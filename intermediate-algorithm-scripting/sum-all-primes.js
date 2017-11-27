/* jshint esversion: 6 */
function sumPrimes(num) {
  let sum=2,
      q,
      prime = 1,
      foo = [];
  for (let n=3; n<=num; n++){
        q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++){
          if (n % i === 0){
            prime = 0;
        }
    }
        foo.push(prime);
        if (prime===1){sum+=n;}
            prime=1;
  }
  return sum;
}

sumPrimes(10);
