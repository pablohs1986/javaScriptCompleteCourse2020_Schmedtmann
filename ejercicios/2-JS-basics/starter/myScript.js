// Section2
//.4
// console.log('Hello World again!!!')

//8. Variables and Data Types
/*var firstName = 'Pablo';
console.log(firstName);

var lastName = "Herrero";
var age = 33;

console.log(firstName + " " + lastName + " has " + age + " years" )*/

//9. Variable Mutation and Type Coercion
// Comments
/* Comments */

/*var firstName = 'Pablo';
var age = 28;

console.log(firstName + "" + age)

var job, isMarried;

job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + " Is he married? " + isMarried);

age = 100;
job = "driver";

alert(firstName + " " + age + " " + job);*/

//10. Operators

// year = 2020;
// var yearJohn = 2018 - 28;

// console.log(yearJohn);
// console.log(year + 2);
// console.log(year - 2);
// console.log(year / 2);

// console.log(typeof year);

//14. IF statement
/*var firstName = "Pablo";
var civilStatus = "married";

if(civilStatus === "married"){
    console.log(firstName + " is married");
} else{
    console.log(firstName + " is not married");
}

var isMarried = false;

if(isMarried){
    console.log("married!");
}else{
    console.log("not married!");
}*/

//15. Boolean logic
/*var firstName = "Pablo";
var age = 33;

if(age < 13){
    console.log(firstName + " is a boy.")
}else if( age >= 13 && age <= 20){
    console.log(firstName + " is a teenager.")
}else if( age > 20 && age <= 30){
    console.log(firstName + " is a young man.")
}else{
    console.log(firstName + " is a man.")
}*/
//16 Ternary operator and Switch
// var firstName = 'Pablo';
// var age = 33;
// var drink = age >= 18 ? 'beer' : 'juice'

// age >= 18 ? console.log(firstName + ' drikns ' + drink)
// : console.log(firstName + ' drinks juice');

// var job = 'driver';

// switch (job){
//     case 'teacher':
//         console.log(firstName + ' teaches kids');
//         break;
//     case 'driver':
//         console.log(firstName + ' driver drives cars');
//         break;
// }

//17. Truthty and falsy values and equality operators
// falsy: undefined, null, 0, '', NaN
/*
var height;

height = 23;

if(height || height === 0){
    console.log('Variable is defined')
}else{
    console.log('Variable has NOT been defined')
}

// Equality operators
// == Converts string of 23 to a number and says that it's same as 23, the number.
if(height == '23'){
    console.log('The == operator does type coercion!')
}*/

//20. Functions
/*function calculateAge(birthYear){
    return 2020 - birthYear;
}

var myAge = calculateAge(1986);
console.log(myAge);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retiremente = 65 - age;
    console.log(firstName + " retires in " + retiremente + " years");
}

yearsUntilRetirement(1986, "Pablo");*/

//21. Function statements and expressions
//Function declaration
function whatDoYouDo(job, firstName){}

//Function expression
var whatDoYouDo = function(job, firstname){}