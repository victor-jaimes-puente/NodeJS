(function () {
"use strict"
console.log('hello worldb1');
function logHello() {
    var output = console.log("hello World")
    return output;
}
logHello();

// Variable practice

function increment(x) {
    return x + 1;
}

var four = increment(3);
var six = increment(increment(increment(3)));

document.write( " <br><br><br><br><br><br><br><br><br><br>variable practice :  " + four);

// add
function add(a , b) {
    const first = a;
    const second = b;
   return(('first number: ' + first) + ( ' plus: ' + ' second number: ' + second + " = ")) +(a + b);
}

document.write( "<br>" +  add(5,5));

// conditionals
    const areYouSure = confirm("ARE YOU SURE!???");

    if (areYouSure){
        document.write(" <br> Great ");
    } else {
        alert("I knew it!");
    }

// while loop

    var i = 0;

    while (i < 11){
        document.write('<br> this is iteration : ' + i );
        i ++;
    }

})();
