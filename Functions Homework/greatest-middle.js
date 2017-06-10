
var greatestMIddle = (function(){
    "use strict";
    return function(arr) {
        for(let i = 1; i<=arr.length; i++) {
            if(arr[i] > arr[i-1] && arr[i]>arr[i+1])
                return arr[i];
        }
        return -1;
    }
}());
console.log(greatestMIddle([1,2,5,6, 10, 9]));