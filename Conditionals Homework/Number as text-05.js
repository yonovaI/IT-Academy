//Напишете програма, която конвертира дадено 3-цифрено число към неговата текстова репрезентация. Напр.: 312 -> three hundred and twelve
var numberAsText = (function () {
    "use strict"

     return function (n) {
        var ones = [null, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
            teens = [null, "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
            tens = [null, null, "twenty", "thirty", "fifty", "sixty", "seventy", "eighty", "ninety"],

            firstDigit = parseInt(n.toString()[0]),
            secondDigit = parseInt(n.toString()[1]),
            thirdDigit =  parseInt(n.toString()[2]);

        if(secondDigit === 0 && thirdDigit === 0 ) {
            return `${ones[firstDigit]} hundred`;
        }
        else if(secondDigit === 0 && thirdDigit !== 0) {
             return `${ones[firstDigit]} hundred and ${ones[thirdDigit]}`;
         }
         else if(secondDigit === 1) {
            if(thirdDigit === 0) {
                return `${ones[firstDigit]} hundred and ten`;
            }
            return `${ones[firstDigit]} hundred and ${teens[thirdDigit]}`;
        }
        else if(secondDigit > 1) {
            if(thirdDigit !== 0) {
                return `${ones[firstDigit]} hundred ${tens[secondDigit] + " " +  ones[thirdDigit]}`;
            } else {
                return `${ones[firstDigit]} hundred and ${tens[secondDigit]}`;
            }
            
        }
    }

})();
console.log(numberAsText(931));
