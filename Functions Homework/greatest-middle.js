//Напишете JS функция, която да намира 1вия елемент от даден масив от цели числа,
// който е по-голям от неговите съседни и да връща индекса му или -1, ако такъв няма.Напр. [1,3,2,5,6] -> 1

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