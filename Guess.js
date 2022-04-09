// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🥳Correct Number';

// document.querySelector('.highscore').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

let secNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
console.log(secNumber);

let totalScore = 20;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 No Number';
    // when the player win the game
  } else if (guess === secNumber) {
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('.message').textContent = '🥳Correct Number';
    document.querySelector('body').style.backgroundColor = '#20c997';
    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the input is greater than secret number
  } else if (guess > secNumber) {
    if (totalScore > 1) {
      document.querySelector('.message').textContent = '👎 To high';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    } else {
      document.querySelector('.message').textContent = '🤦 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // When the input is lessthan secret Number
  } else if (guess < secNumber) {
    if (totalScore > 1) {
      document.querySelector('.message').textContent = '👎 To low';
      totalScore--;
      document.querySelector('.score').textContent = totalScore;
    } else {
      document.querySelector('.message').textContent = '🤦 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // console.log(typeof guess);
});

document.querySelector('.btn-again').addEventListener('click', function () {
  secNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#405685c4';
  document.querySelector('.highscore').textContent = highScore;
});
