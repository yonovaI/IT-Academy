//Hай-дългата поредица от еднакви числа.
function consecutiveNums (arr){
    var max = Number.MIN_VALUE;
    var count =0;
    
    for(var i =0; i<arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count++;
            if(count>max) {
                max = count;
            }
        } else {
             count = 0;         
        }
       
    }
    return max+1;
}
console.log(consecutiveNums([2,1,1,2,3,3,2,2,2,1]));