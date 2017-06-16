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