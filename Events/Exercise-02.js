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
         age = document.querySelector(".age");

    function validateName(el) {
        let input = el.value;

        if(alphabet.indexOf(input.toLowerCase().slice(-1))<0) {
            generateErrorMsg(el, "Invalid input");
        }
        else{
            if(document.getElementsByClassName("error").length>0) {
                var node = document.getElementsByClassName("error")[0];
                    node.style.display = 'none';
            }
        }
    }

    function generateErrorMsg(prev, message){
        let p = document.createElement("P");
            p.textContent = message;
            p.className = "error";

        prev.parentNode.insertBefore(p, prev.nextSibling);
    }

    for(var i = 0; i<name.length; i++) {
        let currentInput = name[i];
        currentInput.addEventListener("input", function () {
            validateName(this);
            return false;
        });
    }
} ());