//Nai-chesto sreshtanoto chislo v masiv
function mostCommonNumber(arr){
    var count =0,
        i=0,
        max = Number.MIN_VALUE,
        mostCommonNum;
    while(i<arr.length) {
        var index = arr.indexOf(i),
            pos = index+1;

        if(arr.indexOf(i, pos)>=0) {
            count++;
            if(count>max) {
                max = count;
                mostCommonNum=i;
            }
        }
        i++;
    }
    return mostCommonNum;
}
console.log(mostCommonNumber(([4, 1, 1, 2,2, 9,9,9,9,9, 3])));