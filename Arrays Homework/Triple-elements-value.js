function tripleElementsValue(arr) {
    if(arr.length > 20)
        return "Please enter less numbers";
    var tripled = arr.map(function(el){
       return  el*3;
    });
    return tripled; 
}
console.log(tripleElementsValue([1, 4, 9, 11, 1, 4, 9, 11, 1, 9, 11, 1, 4, 9, 11]));