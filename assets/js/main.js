// "use strict"

// const userChoiceShow = document.getElementById('user_score');
// const compChoiceShow = document.getElementById('comp_score');
// const buttons = document.querySelectorAll('img');
// const rounds = document.querySelectorAll('input[type="checkbox"]');
// const gameStatus = document.querySelector('.game_status');
// let userChoice;
// let compChoice;
// let uScoreNr = 0;
// let cScoreNr = 0;
// let currentRound = 0
// let amountRounds;

// // 
// const roundsAmount = () => {
//   rounds.forEach(checkbox => {
//     if (checkbox.checked) {
//       console.log(checkbox.value)
//       amountRounds = Number(checkbox.value)
//       return checkbox.value
//     }
//   })
// }


// // Target buttons
// buttons.forEach(button => button.addEventListener('click', (e) => {
//   userChoice = e.target.id;
//   console.log(userChoice)
//   randomChoice()
// }));

// // Random choice
// const randomChoice = () => {
//   const randomNr = Math.floor(Math.random() * 3) + 1;
//   console.log(randomNr);
//   if (randomNr === 1) {
//     compChoice = 'rock'
//   } else if (randomNr === 2) {
//     compChoice = 'paper'
//   } else if (randomNr === 3) {
//     compChoice = 'scissor'
//   }
//   playGame()
// }

// // Game Play
// const playGame = () => {
//   if (userChoice === compChoice) {
//     return gameStatus.textContent = "It's was Draw"
//   } else if (userChoice === 'rock' && compChoice === 'paper') {
//     cScoreNr++;
//     compChoiceShow.textContent = cScoreNr;
//     return gameStatus.textContent = "Paper 'comp' beats...Rock 'user'"
//   } else if (userChoice === 'rock' && compChoice === 'scissor') {
//     uScoreNr++;
//     userChoiceShow.textContent = uScoreNr;
//     return gameStatus.textContent = "Rock 'user' beats...Scissor 'comp'"
//   }
//   else if (userChoice === 'paper' && compChoice === 'scissor') {
//     cScoreNr++;
//     compChoiceShow.textContent = cScoreNr;
//     return gameStatus.textContent = "Scissor 'comp' beats...Paper 'user'"
//   } else if (userChoice === 'paper' && compChoice === 'rock') {
//     uScoreNr++;
//     userChoiceShow.textContent = uScoreNr;
//     return gameStatus.textContent = "Paper 'user' beats...Rock 'comp'"
//   } else if (userChoice === 'scissor' && compChoice === 'rock') {
//     cScoreNr++;
//     compChoiceShow.textContent = cScoreNr;
//     return gameStatus.textContent = "Rock 'comp' beats...Scissor 'user'"
//   } else if (userChoice === 'scissor' && compChoice === 'paper') {
//     uScoreNr++;
//     userChoiceShow.textContent = uScoreNr;
//     return gameStatus.textContent = "Scissor 'user' beats...Paper 'comp'"
//   }
// }gh
// // Check bottons
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('click', () => {
//     if (checkbox.checked) {
//       checkboxes.forEach(otherCheckbox => {
//         if (otherCheckbox !== checkbox) {
//           otherCheckbox.checked = false;
//           otherCheckbox.nextElementSibling.style.backgroundColor = '#eee';
//           otherCheckbox.nextElementSibling.style.color = '';
//         }
//       });
//       checkbox.nextElementSibling.style.backgroundColor = '#EFBF6A';
//       checkbox.nextElementSibling.style.color = 'black';
//     } else {
//       checkbox.nextElementSibling.style.backgroundColor = '#eee';
//       checkbox.nextElementSibling.style.color = '';
//     }
//   });
// });

const userChoiceShow = document.getElementById('user_score');
const compChoiceShow = document.getElementById('comp_score');
const buttons = document.querySelectorAll('img');
const rounds = document.querySelectorAll('input[type="checkbox"]');
const gameStatus = document.querySelector('.game_status');
const moneyBox = document.querySelector('.money-box');
const gameRestart = document.querySelector('.game-restart')

let userChoice;
let compChoice;
let uScoreNr = 0;
let cScoreNr = 0;
let currentRound = 0;
let amountRounds;

const isMaxRoundsReached = () => {
  return currentRound >= amountRounds;
}

const resetGame = () => {
  currentRound = 0;
  uScoreNr = 0;
  cScoreNr = 0;
  userChoiceShow.textContent = 0;
  compChoiceShow.textContent = 0;
  gameStatus.textContent = '';
}

const updateGameStatus = () => {
  if (isMaxRoundsReached()) {
    if (uScoreNr > cScoreNr) {
      gameStatus.textContent = "YOU WiN!";
      moneyBox.classList.toggle('money-box_show');
    } else if (cScoreNr > uScoreNr) {
      gameStatus.textContent = "YOU LOST!";
    } else {
      gameStatus.textContent = "DRAW!";
    }

  } else {
    gameStatus.textContent = `Round ${currentRound}/${amountRounds}`;
    if (uScoreNr > cScoreNr) {
      gameStatus.textContent += " - You Win!";

      gameStatus.style.color ='Green'

    } else if (cScoreNr > uScoreNr) {
      gameStatus.textContent += " - You Lose!";
      gameStatus.style.color = 'Red'
    } else {
      gameStatus.textContent += " - Draw";
      gameStatus.style.color = 'White'
    }
  }
}

const handleButtonClick = (e) => {
  if (isMaxRoundsReached()) {
    return;
  }

  userChoice = e.target.id;
  randomChoice();
}

buttons.forEach(button => button.addEventListener('click', handleButtonClick));

const updateGameScore = () => {
  if (userChoice === compChoice) {
    gameStatus.textContent = "It was a draw";
  } else if (
    (userChoice === 'rock' && compChoice === 'scissor') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissor' && compChoice === 'paper')
  ) {
    uScoreNr++;
    userChoiceShow.textContent = uScoreNr;
    gameStatus.textContent = `You won round ${currentRound}`;
  } else {
    cScoreNr++;
    compChoiceShow.textContent = cScoreNr;
    gameStatus.textContent = `You lost round ${currentRound}`;
  }

  currentRound++;
  updateGameStatus();
}

const randomChoice = () => {
  const randomNr = Math.floor(Math.random() * 3) + 1;

  if (randomNr === 1) {
    compChoice = 'rock';
  } else if (randomNr === 2) {
    compChoice = 'paper';
  } else if (randomNr === 3) {
    compChoice = 'scissor';
  }

  updateGameScore();
}
const getGameWinner = () => {
  let message = '';
  if (uScoreNr > cScoreNr) {
    
    gameStatus.innerHTML = "You won the game!";
    gameStatus.style.color = 'Green';


  } else if (cScoreNr > uScoreNr) {
    message = "You lost the game!";
    gameStatus.style.color = 'Red';
  } else {
    message = "The game ended in a draw!";
    gameStatus.style.color = 'White';
  }
  gameStatus.textContent = message;
  return message;
}

rounds.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      rounds.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
          otherCheckbox.nextElementSibling.style.backgroundColor = '#eee';
          otherCheckbox.nextElementSibling.style.color = '';
        }
      });
      checkbox.nextElementSibling.style.backgroundColor = '#EFBF6A';
      checkbox.nextElementSibling.style.color = 'black';
      amountRounds = Number(checkbox.value);
      resetGame();
    } else {
      checkbox.nextElementSibling.style.backgroundColor = '#eee';
      checkbox.nextElementSibling.style.color = '';
    }
  });
});






const Reset = () => {
  window.location.reload();
};
document.querySelector('.game-restart').addEventListener("click", Reset)