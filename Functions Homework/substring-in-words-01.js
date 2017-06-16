//Напишете JS функция, която да намира колко пъти се среща дадена дума в даден текст. 
//Търсеното може да бъде чувствително към главни букви или да не бъде чувствително, нека това зависи от параметър, който да има дефолтна стойност.

var substringInWord = (function(){
    "use strict";
    return function (substring, word, isSensitive) {
        "use strict";
        if(!isSensitive) {
            substring = substring.toLowerCase();
            word = word.toLowerCase();
        }

        let index = word.indexOf(substring),
            count = 0;
        while (index !== -1) {

            let nextIndex = index+1;
            if(word.indexOf(substring, nextIndex))
                count++;
            index = word.indexOf(substring, nextIndex);
        }
        return count;
    }

}());
console.log(substringInWord('ha', 'hahahhAaahahaHahHhaA', true));