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
        this.checkAnswer = function(ans, callback){  // 6.
            var sc;
            
            if (this.correctAnswer === ans){
                console.log('Good done!!!');
                sc = callback(true);
            } else {
                console.log('Sorry, try it again :(');
                sc = callback(false);
            }
            this.displayScore(sc);
        }
        this.displayScore = function(score){
            console.log('Current score: ' + score);
            console.log('---------------------------');
        }
    }

    // 2.
    var question1 = new Question('Cómo me llamo?', ['Pablo', 'Pedro', 'Pepe'], 0);
    var question2 = new Question('Qué estoy estudiando?', ['Arquitectura', 'JavaScript', 'Pintura'], 1);

    // 3.
    var questions = [question1, question2];

    // 10. & 11.
    function score() {
        var sc = 0;
        return function(correctAnswer){
            if (correctAnswer){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    // 8. & 9.

    function nextQuestion(){
        // 4.
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        // 5.
        var userAnswer = prompt('Select and answer:');

        // 6.

        if (userAnswer !== 'exit') {
            questions[n].checkAnswer(parseInt(userAnswer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();



})();

