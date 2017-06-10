// Напишете JS код, който по задедени 3 числа намира най-малкото.
function leastOfThree(a,b,c) {
    if(a>b) {
        if(b>c) {
            return c;
        } else {
            return b;
        }
    } else {
        if(a>c) {
            return c;
        }else {
            return a;
        }
    }
}
console.log("The least number is " + leastOfThree(2, 1, 0));
