var calculator = (function(){
    "use strict";
    return function calculate(a, b, opts) {
        let obj = arguments[2],
            val = Object.values(obj)[0];
        switch(val) {
            case "add":
                return a+b;
                break;
            case "difference":
                return a-b;
                break;
            case "multiplication":
                return a*b;
                break;
            case  "division":
                return a/b;
                break;

        }
    };
}());
console.log(calculator(5,2,{"method":"multiplication"}));
console.log(calculator(5,2,{"method":"division"}));
