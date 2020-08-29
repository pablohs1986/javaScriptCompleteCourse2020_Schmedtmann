// Challenge 1

var heightMark = 180;
var heightJohn = 170;
var massMark = 85;
var massJohn = 80;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var higherBmi = bmiMark > bmiJohn;

console.log("Is Mark's BMI gigher than John's? " + higherBmi);


