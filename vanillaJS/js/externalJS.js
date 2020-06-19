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

document.write(four);