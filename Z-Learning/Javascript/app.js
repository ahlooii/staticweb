/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();

//Change text according to variable
//document.querySelector("#current-" + activePlayer).textContent = dice; //.textContent do not work with HTML tag
//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';

//read value from DOM and put into variable "x" (getter)
var x = document.querySelector("#score-0").textContent;
console.log(x)



document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
        //1. Random Number, 2.
        var dice = Math.floor(Math.random() * 6)+1;

        //2. Display Result To The DICE
        var diceDOM = document.querySelector('.dice') //Select html class and store under function's variable
        diceDOM.style.display = 'block';        // make dice appear
        diceDOM.src = 'dice-' + dice + '.png'  //different image
        
        //3. Update to Round Score But only if the row number was > 1
        if (dice !== 1 ){
            //Add score 
            roundScore += dice
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }   
    }        
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){//Add current score to Global Score
        scores[activePlayer] += roundScore;
        //Update UI  
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
        //Check If Player won the game
        if(scores[activePlayer] >= 10){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }}
     
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    //Apply css - hide the dice
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary writing if else statement "Condition / If .... / Else ...."
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Toggle is to turn on if it's off and turn off if it's on
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}