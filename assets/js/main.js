"use strict"

const userScoreShow = document.getElementById('user_score');
const compScoreShow = document.getElementById('comp_score');
const buttons = document.querySelectorAll('img');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const gameStatus = document.querySelector('.game_status')
let userScore;
let compScore;
let uScoreNr = 0;
let cScoreNr = 0;
let totalRounds =0;
let completedRounds = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {
  userScore = e.target.id;
  console.log(userScore)
  randomChoice()
}));

const randomChoice = () => {
  const randomNr = Math.floor(Math.random() * 3) + 1 ;
  console.log(randomNr);
  if (randomNr === 1) {
    compScore = 'rock'
  } else if (randomNr === 2) {
    compScore = 'paper'
  } else if (randomNr === 3) {
    compScore = 'scissor'
  }
  gameWin()
}

const gameWin = () => {
  if (userScore === compScore) {
    return gameStatus.textContent = "It's was Draw"
  } else if (userScore === 'rock' && compScore === 'paper') {
    cScoreNr++;
    compScoreShow.textContent = cScoreNr;
    return gameStatus.textContent = "Paper 'comp' beats...Rock 'user'"
  } else if (userScore === 'rock' && compScore === 'scissor') {
    uScoreNr++;
    userScoreShow.textContent = uScoreNr;
    return gameStatus.textContent = "Rock 'user' beats...Scissor 'comp'" 
  }
  
  else if (userScore === 'paper' && compScore === 'scissor') {
    cScoreNr++;
    compScoreShow.textContent = cScoreNr;
    return gameStatus.textContent = "Scissor 'comp' beats...Paper 'user'"
  } else if (userScore === 'paper' && compScore === 'rock') {
    uScoreNr++;
    userScoreShow.textContent = uScoreNr;
    return gameStatus.textContent = "Paper 'user' beats...Rock 'comp'"
  } else if (userScore === 'scissor' && compScore === 'rock') {
    cScoreNr++;
    compScoreShow.textContent = cScoreNr;
    return gameStatus.textContent = "Rock 'comp' beats...Scissor 'user'"
  } else if (userScore === 'scissor' && compScore === 'paper') {
    uScoreNr++;
    userScoreShow.textContent = uScoreNr;
    return gameStatus.textContent = "Scissor 'user' beats...Paper 'comp'"
  }
}








// Checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false;
      }
    });
  });
});