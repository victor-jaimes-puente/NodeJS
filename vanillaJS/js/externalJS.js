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

    document.write("<br><br><br><br><br><br>variable practice :  " + four);

// add
    function add(a, b) {
        const first = a;
        const second = b;
        return (('first number: ' + first) + (' plus: ' + ' second number: ' + second + " = ")) + (a + b);
    }

    document.write("<br>" + add(5, 5));

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

        while (i < 10) {
            i++;
            document.write('<br> this is iteration : ' + i);
        }
    }

    // whileLoop();

// for loop
    function forLoop() {

        for (var i = 0; i <= 20; i++) {
            document.write('<br> Using for loop : iteration ' + i);

        }
    }

    // forLoop();

// arrays
    function arrays() {
        // variables
        var colors = ['red', 'blue', 'black', 'orange'];
        console.log(colors);
        console.log(colors.reverse());

        // length
        document.write('<h3 style="color: red">Length</h3>');
        document.write(colors.length);
        // forEach
        document.write('<h3 style="color: red">For Each</h3>')
        colors.forEach(function (color) {
            document.write('<br>');
            document.write(color);
        });
        // reverse
        document.write('<h3 style="color: red">Reverse</h3>')
        colors.reverse().forEach(function (color) {
            document.write('<br>');
            document.write(color);
        });
        //


    }

    arrays();


})();
