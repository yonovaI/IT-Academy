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