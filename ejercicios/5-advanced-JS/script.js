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

// //Functions returning functions

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

// //IIFE pattern [used for data privacy, code modularity]
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();


// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);



// Closures <------------ Importante
/* Una clausura o closure es una función que guarda referencias del estado 
adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al 
ámbito de una función exterior desde una función interior. En JavaScript, 
las clausuras se crean cada vez que una función es creada.*/

/*function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);*/

/* Minichallenge: rewrite interviewQuestion() with closures*/

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

/*function interviewQuestion(job) {
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher'){
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello, ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');

teacherQuestion("Sara");
designerQuestion('Pablo');
otherQuestion('Sofía');*/

// ->> Bind, call and apply

/* The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + 
            timeOfDay + ', ladies and gentlemen! I\'m ' +
            this.name + ' I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('hey! What\'s up! I\'m ' +
            this.name + ' I\'m a ' +
            this.job + ' and I\'m ' + 
            this.age + ' years old. have a nacie ' + 
            timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon'); // -> call()
// john.presentation.apply(emily, ['friendly, afternoon']); // -> apply(), toma array como parámetro

var johnjFriendly = john.presentation.bind(john, 'friendly'); // -> bind(), The bind() method returns a new function, when invoked, has its this sets to a specific value.

johnjFriendly('morning');
johnjFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon')