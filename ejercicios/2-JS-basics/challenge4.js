var john = {
    fullName: 'John',
    mass: 80,
    height: 170,

    calculateBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName: 'Mark',
    mass: 85,
    height: 180,

    calculateBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(mark.calculateBmi() > john.calculateBmi()){
    console.log(mark.fullName +" " + mark.bmi + " WINS || " + john.fullName + " " + john.bmi)
}else if(john.calculateBmi() > mark.calculateBmi()){
    console.log(mark.fullName +" " + mark.bmi + " || " + john.fullName + " " + john.bmi + " WINS")
}

console.log(john);
