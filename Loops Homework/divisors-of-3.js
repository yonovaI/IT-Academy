function divisibleByThree(n, m) {
    var divisors = [];
    for(var i=n; i<=m; i++) {
        if(i%3===0) {
            divisors.push(i);
        }
    }
    return divisors;
}
console.log(divisibleByThree(1, 10));