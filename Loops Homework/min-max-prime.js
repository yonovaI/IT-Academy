//Min i max prime v daden interval
function isPrime(n) {
    for(var i =2; i<=Math.sqrt(n); i++) {
        if(n%i===0)
            return false;
    }
    return n !==1;
}

function minMaxPrimes(m, n) {
    var primes = [],
        minPrime,
        maxPrime;
    for (var i=m; i<n; i++) {
        if(isPrime(i)) 
            primes.push(i);
    }
     minPrime = primes[0];
     maxPrime = primes[primes.length-1];
     
     return "min prime: " + minPrime +" max prime: " +maxPrime;
}
console.log(minMaxPrimes(1, 10));