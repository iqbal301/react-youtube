'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

document.querySelector('.guess').value =23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){   document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when  there is no input
    if(!guess){
        // document.querySelector('.message').textContent = 'NO number!';
        displayMessage('No number')
        // when a player win
    } else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Correct number';
        displayMessage('correct number')
  document.querySelector('.number').textContent= secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
if (score>highscore){
    highscore = score;
document.querySelector('.highscore').textContent = highscore;
// when number is difrent......
}
    }
else if(guess !==secretNumber){
     if(score>1) {       //document.querySelector('.message').textContent =guess>secretNumber ? 'too high number': 'Too low';
    displayMessage(guess>secretNumber ? 'too high number': 'Too low')
        score--;    document.querySelector('.score').textContent=score; 
    }else {
        // document.querySelector('.message').textContent = 'you lost the game';
        displayMessage('You lost the game')
    }
    }
//     //when guess is too high number
//     }else if(guess > secretNumber){
//         if (score>1){
//             document.querySelector('.message').textContent = 'too high number';
//             score--;
//             document.querySelector('.score').textContent=score; 
//         }else {
//             document.querySelector('.message').textContent = 'you lost the game';
//         }
//         //guess is too low number
//     }
//     else if(guess< secretNumber){
//    if(score>1){     document.querySelector('.message').textContent = 'Too low number';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//     else {
//         document.querySelector('.message').textContent = 'you lost the game';
//     }
// }
});

document.querySelector('.again').addEventListener('click', function  () {
    score=20;
    secretNumber =Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start  guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
})
