//Напишете JS фунцкия, която да взима всички <div /> елементи с даден клас и във всеки четен елемент да добавя по 1 още 1 <div />  с произволно съдържание

(function(){
    function main(targeted){
        var elements = document.querySelectorAll('.'+targeted),
            content = [,"even", "odd", "even", "odd", "even", "odd"];
        for(var i = 0; i<elements.length; i++) {
            if(i%2===0) {
                var newElement = document.createElement('DIV');
                    newElement.textContent = content[i];
                elements[i].appendChild(newElement);
            }
        }
      
    }
    main('target');
})();