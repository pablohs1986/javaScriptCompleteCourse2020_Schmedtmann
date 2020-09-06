/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

////////////////////////

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

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

//Events
//roll dice btn
// function btn(){
    
// }

// btn();

// document.querySelector('#btn-roll').addEventListener('click', btn); // btn seria un callback.. funcion que se pasa como argumento, pero que realmente ejecuta el lístener

document.getElementById('score-0').textContent = '0'; // POne marcadores a 0
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor((Math.random()*6) + 1);

    // 2. Display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src='dice-' + dice + '.png';

    // 3. Update the round score if the rolled number was not a 1, else, next player
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active'); // Uso de toggle (IMPORTANTE)
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }


}); // anonymous function... no se puede reutirlizar


