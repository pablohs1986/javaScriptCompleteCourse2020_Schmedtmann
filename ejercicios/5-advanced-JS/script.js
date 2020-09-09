var john = {
    name: 'John',
    yearOfBirth: 1986,
    job: 'teacher'
};

// Function constructor (para crear la clase)
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var pablo = new Person("PAblo", 1986, "developer");

console.log(pablo)
pablo.calculateAge();

var jane = new Person('Jane', 1980, "designer");
var mark = new Person('Mark', 1948, 'retired');