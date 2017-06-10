//Напишете JS код, който сортира 3 числа във възходящ ред
function sortAscending(a, b, c) {
    "use strict";
    if (a<b && a<c)
    {
        if (b<c)
        {
            return a+ " "+ b+" "+c;
        }
        else
        {
            return a+" "+c+" "+b;
        }
    }
    else if (b<a && b <c)
    {
        if (a<c)
        {
            return b+" "+a+" "+c;
        }
        else
        {
            return b+" "+c+" "+a;
        }
    }
    else if (c<a && c<b)
    {
        if (a<b)
        {
            return c+" "+ a+" "+ b;
        }
        else
        {
            return c+" "+ b+" "+ a;

        }
    }

}
console.log(sortAscending(3,4,-1));


