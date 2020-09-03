/*
Phases (how JS works):
    1. Creation phases:
        Creation of Variable object
        Creation of scope chain
        Determine value of this variable
    2 Execution phase:
        The code function that generated the current execution context
        is ran line by line


GLOBAL EXECUTION CONTEXT:
    Code n ot inside any functions.
    Associated with global object (window object).

EXECUTION CONTEXT:
    Code inside the functions.
    Where a fuction is executed:
        - Creation phase.
        - Execution phase

EXECUTION CONTEXT OBJECT
    Variable object.
    Scope chain.
    This variable.


*/

///////////////////////////////////////
// Lecture: Hoisting //

// Functions
// calculateAge(1986);


// function calculateAge(year){
//     console.log(2020 - year);
// }

// // calculateAge(1986); // Da igual ponerlo en un sitio o en otro

// // Variables
// console.log(age);
// var age = 10;
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping //
// There is only a way to create a scope in JS: functions (in other programs there are if, for, etc...)
// lexical scoping: A function in another function, 
// gets acces to the scope of the outer function (the parent) [los hijos-locales- pueden acceder a los padres Y AL GLOBAL, pero no vieversa].

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword    
    // Regular function: This always point to the global object.
    // Method call: This points to the object that is calling the method.
    // This is not assigned a value until a function where it is defined actually called.





///
// Method Borrowing (como un override...)
//video 42
// Si hay una función dentro de un objeto y la queremos usar en otro sin
// necesidad de escribirla. Es como un override.

// john.calculateAge();
// mike.calculateAge = john.calculateAge(); (trata la función como una variable)
// mike.calculateAge();
