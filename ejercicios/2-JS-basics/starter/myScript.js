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

// Challenge 1

var heightMark = 180;
var heightJohn = 170;
var massMark = 85;
var massJohn = 80;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var higherBmi = bmiMark > bmiJohn;

console.log("Is Mark's BMI gigher than John's? " + higherBmi);