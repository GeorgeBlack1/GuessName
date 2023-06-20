'use strict';
/*
For the class in CSS we use a DOT
console.log(document.querySelector('.message'));

console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Enter a number')
);
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

console.log((document.querySelector('.guess').value = 2));
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
//document.querySelector('.number').value = number;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '😤No Number!!';
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = '🥳 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //document.querrySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🧐 To high number';
      score--;
      document.querySelector('.score').textContent = score;
    } else document.querySelector('.message').textContent = '😢Sorry game over';
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = '😞 Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else document.querySelector('.message').textContent = '😢Sorry game over';
  }
});
// Implementing game logic
// Event for the again button
// let again = function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querrySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// };

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
