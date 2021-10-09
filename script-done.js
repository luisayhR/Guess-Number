'use strict';

//* 72.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//* 73. to 77.
//* 78. refactoring the code DRY : avoid the duplicate code!
//Place secret number
let secretNumber = Math.trunc(Math.random()*20)+1;

//Place initial score
let score = 20;

//Place high score;
let highscore = 0;

//
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

//Click "Check" action
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent = '🤷🏻‍♀️ No number!';
        displayMessage('🤷🏻‍♀️ No number!');
    } else if (guess === secretNumber){
        // document.querySelector('.message').textContent = '👏🏻 Correct Number!';
        displayMessage( '👏🏻 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        // correct number style
        document.querySelector('body').style.
        backgroundColor='#60b347';
        document.querySelector('.number').style.
        width='30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //! refactoring the code 
    else if (guess !== secretNumber){ // when guess is wrong
        if(score > 1){
            //! ternary
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!': '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!': '📉 Too low!');
            score --;
            document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector('.message').textContent = "🤯 You've lost the game!";
            displayMessage("🤯 You've lost the game!");
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = "🤯 You've lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = "🤯 You've lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


})

//Click "Again" action
document.querySelector('.again').addEventListener('click', function(){
    //Reset style
    document.querySelector('body').style.
    backgroundColor='#222';
    document.querySelector('.number').style.
    width='15rem';

    //Reset message
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    //Reset guess number
    document.querySelector('.guess').value = '';
    //Reset score
    score = 20;
    document.querySelector('.score').textContent = score;
    //Reset secret number
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
})
