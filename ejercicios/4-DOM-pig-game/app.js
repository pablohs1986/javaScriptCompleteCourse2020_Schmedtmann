/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

////////////////////////

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // 1. Random number
        var dice = Math.floor((Math.random()*6) + 1);
        var dice2 = Math.floor((Math.random()*6) + 1);

        // 2. Display result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src='dice-' + dice + '.png';

        var diceDom2 = document.querySelector('.dice2');
        diceDom2.style.display = 'block';
        diceDom2.src='dice-' + dice2 + '.png';


        // 3. Update the round score if the rolled number was not a 1, else, next player
        if (dice !== 1 && dice2 !== 1){
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
            nextPlayer()
        }
    }
}); // anonymous function... no se puede reutirlizar


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
          // Add current score to global
    scores[activePlayer] += roundScore;
    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('#finalScore').value;
    var winningScore;

    if (input) {
        winningScore = input;
    } else{
        winningScore = 100; 
    }
    
    // Ckck if player won the game
        var two6InARow = 0;
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice, .dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //Aplica clase winner de css
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); //Aplica clase winner de css
            gamePlaying = false;
        } else if(document.querySelector('#score-' + activePlayer).textContent === 6){
            two6InARow++;
            if (two6InARow == 2){
                document.querySelector('#score-' + activePlayer).textContent = 0;
            }
        } else {
            nextPlayer()
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active'); // Uso de toggle (IMPORTANTE)
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice, .dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // Funciona como un setter
// document.querySelector('#current-' + activePlayer).textContent = dice; //Selecciona elemento --- como CSS -- y le da contenido
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// texContent texto plano.
// innerHTML  html

// Funciona como un getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// Para modificar CSS
document.querySelector('.dice').style.display = 'none'; // style.propiedadCSS
document.querySelector('.dice2').style.display = 'none'; // style.propiedadCSS

//Events
//roll dice btn
// function btn(){
    
// }

// btn();

// document.querySelector('#btn-roll').addEventListener('click', btn); // btn seria un callback.. funcion que se pasa como argumento, pero que realmente ejecuta el lístener

document.getElementById('score-0').textContent = '0'; // POne marcadores a 0
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}