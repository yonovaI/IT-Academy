function replaceSpaces(str) {
    
var re = /\ /gi;

var newstr = str.replace(re, '&nbsp;');

return newstr;
}
console.log(replaceSpaces("Spac e to be re placed"));