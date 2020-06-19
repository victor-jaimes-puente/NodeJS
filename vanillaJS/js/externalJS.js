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

document.write( "<br><br><br><br><br><br>variable practice :  " + four);

// add
function add(a , b) {
    const first = a;
    const second = b;
   return(('first number: ' + first) + ( ' plus: ' + ' second number: ' + second + " = ")) +(a + b);
}

document.write( "<br>" +  add(5,5));

// conditionals
//     const areYouSure = confirm("ARE YOU SURE!???");
//
//     if (areYouSure){
//         document.write(" <br> Great ");
//     } else {
//         alert("I knew it!");
//     }

// while loop
function whileLoop() {

    var i = 0;

    while (i < 10){
        i ++;
        document.write('<br> this is iteration : ' + i );
    }
}
whileLoop();
// for loop
    function forLoop() {

    for ( var i = 0; i <= 20; i++){
        document.write('<br> Using for loop : iteration ' + i);

    }
}
forLoop();

// arrays
    function arrays() {
        var colors = ['red', 'blue', 'black', 'orange'];

        document.write('<br><br>');
        document.write(colors.length);

        colors.forEach(function (color) {
            document.write('<br>')
        document.write(color);
        })
    }
arrays();


})();
