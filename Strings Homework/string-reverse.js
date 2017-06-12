function reverse(str) {
    var toBeReversed = str.split('');
    toBeReversed.reverse().join('');

    return toBeReversed;
}
console.log(reverse("Iza"));