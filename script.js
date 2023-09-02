'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!🍕'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23


document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);

    document.querySelector('.message').textContent = 'Correct Number!🍕'
})

 */

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    Secretnumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number!'
        displayMessage('⛔ No number')
    }
    // Player wins the games
    else if (guess === Secretnumber) {
        // document.querySelector('.message').textContent = 'correct number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = Secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // when guess is wrong
    else if (guess !== Secretnumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > Secretnumber ? 'Too Hight!' : 'Too Low!';
            displayMessage(guess > Secretnumber ? '📈Too Hight!' : '📈Too Low!');

            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '💥You Lost the Game!';
            displayMessage('💥You Lost the Game!')
            document.querySelector('.score').textContent = 0;
        }


    }





    // When input is too High
    /*
        else if (guess > Secretnumber) {
    
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too Hight!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '💥You Lost the Game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    
    
        // When input is too low
        else if (guess < Secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too Low!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '💥You Lost the Game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    */

})


