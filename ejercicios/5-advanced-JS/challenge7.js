// 7.
(function(){
    // 1.
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.displayQuestion = function(){  // 5.
            console.log(this.question);
            for (let i = 0; i < this.answers.length; i++) {
                console.log(i + ' ' + this.answers[i]);
            }
        }
        this.checkAnswer = function(ans){  // 6.
            if (this.correctAnswer === ans){
                console.log('Good done!!!');
            } else {
                console.log('Sorry, try it again :(');
            }
        }
    }

    // 2.
    var question1 = new Question('Cómo me llamo?', ['Pablo', 'Pedro', 'Pepe'], 0);
    var question2 = new Question('Qué estoy estudiando?', ['Arquitectura', 'JavaScript', 'Pintura'], 1);

    // 3.
    var questions = [question1, question2];

    // 4.
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    // 5.
    var userAnswer = parseInt(prompt('Select and answer:')); // Ojo -> devuelve String, hay que aplicar parseInt <- 

    // 6.
    questions[n].checkAnswer(userAnswer);
})();

