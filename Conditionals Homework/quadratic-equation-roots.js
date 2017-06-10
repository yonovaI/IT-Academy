//         Напишете JS код, който да намира корените на квадратно уварниение: ax^2 + bx + c = 0 по зададени a, b и c.

function quadEquation(a, b, c) {
    "use strict";

    var d=(Math.pow(b,2)-(4*a*c));
    var x1=(-b + Math.sqrt(d)) / (2*a);
    var x2=(-b - Math.sqrt(d)) / (2*a);

    if (d < 0) {
        console.log("No real roots");
    } else if (d == 0) {
        console.log("X = "  + x1);
    } else {
        console.log("X1 = " + x1 + " X2 = " + x2);
    }
}
console.log(quadEquation(2,-4,2));

