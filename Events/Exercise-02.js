(function () {
    "use strict";

    function generateAlphabet(charA, charZ) {
        let a = [],
            i = charA.charCodeAt(0),
            j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }

        return a;
    }
    let alphabet = generateAlphabet('a', 'z');


     let name = document.querySelectorAll(".name"),
         age = document.querySelector("#age");

    function validateName(el) {
        let input = el.value;

        if(alphabet.indexOf(input.toLowerCase().slice(-1))<0) {
           document.getElementById(el.id+"Error").style.display = "block";
        }
        else{
			document.getElementById(el.id+"Error").style.display = "none";
        }
    }

	function validateAge (el) {
		let input = parseInt(el.value);
		
		if(input>=18 && input <=54) {
			document.getElementById(el.id+"Error").style.display = "none";
		} else{
			document.getElementById(el.id+"Error").style.display = "block";
        }
	}
    for(var i = 0; i<name.length; i++) {
        let currentInput = name[i];
        currentInput.addEventListener("input", function () {
            validateName(this);
        });
    }
	
	age.addEventListener("change", function(){
		validateAge(this);
	}) 
} ());