// var john = {
//     name: 'John',
//     yearOfBirth: 1986,
//     job: 'teacher'
// };

// // Function constructor (para crear la clase)
// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// Person.prototype.lastName = 'Smith';

// var pablo = new Person("PAblo", 1986, "developer");

// console.log(pablo);
// console.log(pablo.lastName);
// pablo.calculateAge();

// var jane = new Person('Jane', 1980, "designer");
// var mark = new Person('Mark', 1948, 'retired');

// console.log(pablo instanceof Person);

// // Object.create
// var personProto = {
//     calculateAge: function(){
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// // var john = Object.create(personProto);
// // john.name = 'John';
// // john.yearIfBurth = 1986;
// // john.job = 'teacher';

// var john = Object.create(personProto, {
//     name: {value: 'John'},
//     yearIfBurth: {value:1986},
//     job: {value:'teacher'},
// });

// console.log(john);


// Primitives vs objects
// Primitives
// var a = 23;
// var b = a; // No referencia a la otra variable, es una mera copia.
// a = 46;

// console.log(a);
// console.log(b);

// // Objects 
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1; // Referencia al objeto

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // Functions // dentro de las funciones funciona exactamente igual.
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'Oviedo';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// Objects and functions

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(array, fn){ // pasa una callback!
//     var arrResult = [];
//     for (let i = 0; i < array.length; i++) {
//         arrResult.push(fn(array[i]));
//     }
//     return arrResult;
// }

// function calculateAge(element){
//     return 2016 - element;
// }

// function isFullAge(element){
//     return element >= 18;
// }

// function maxHeartRate(element) {
//     if (element >= 18 && element <= 81){
//         return Math.round(206.9 - (0-67 * element));
//     } else{
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge); // calculateAage es un callback... es llamado por arrayCalc, por eso no lleva ()
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer'){
//         return function(name){ // anonymous function dentro de otra función
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log(name + ', what subject do you teach?');
//         }
//     } else{
//         return function(name){
//             console.log('Hello, ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// var otherQuestion = interviewQuestion('other');

// teacherQuestion('Pablo');
// designerQuestion('Pepa');
// otherQuestion('Juan');

// interviewQuestion('teacher')('Mark');

// IIFE pattern [used for data privacy, code modularity]
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);