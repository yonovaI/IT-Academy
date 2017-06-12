function substringOccurances(str, substring) {
    var count = 0;
    var i = 0;

    while (str.indexOf(substring, pos) !== -1) {
        var index = str.indexOf(substring, pos),
                pos = index + 1;
        count++;

        i++;

    }
    return count;
}
console.log(substringOccurances('izibivibibibibizizizi', 'bizi'));