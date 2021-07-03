const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const playerSpan = document.querySelector(".span-hand-1");
const robotSpan = document.querySelector(".span-hand-2");

const resultSpan = document.querySelector(".result-span");
const result = document.querySelector(".result");

function RobotResponse(userChoice) {
  btnRock.style.pointerEvents = "none";
  btnPaper.style.pointerEvents = "none";
  btnScissors.style.pointerEvents = "none";

  /* between 0 and 2 */
  let rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      robotSpan.innerText = "Rock";
      break;

    case 1:
      robotSpan.innerText = "Paper";
      break;

    case 2:
      robotSpan.innerText = "Scissors";
      break;

    default:
      alert("??? ROBOT-> " + rand + " USER-> " + userChoice);
      break;
  }

  function displayResult(exclamation) {
    setTimeout(() => {
      result.style.display = "flex";
      resultSpan.innerText = exclamation;

      setTimeout(() => {
        result.style.display = "none";
        btnRock.style.pointerEvents = "all";
        btnPaper.style.pointerEvents = "all";
        btnScissors.style.pointerEvents = "all";
      }, 1500);
    }, 500);
  }

  if (userChoice == rand) {
    let resultExclamation = "Tie";
    displayResult(resultExclamation);
  } else if (userChoice - rand == 1) {
    let resultExclamation = "YOU WIN";
    displayResult(resultExclamation);
  } else {
    let resultExclamation = "You lose";
    displayResult(resultExclamation);
  }
}

btnRock.addEventListener("click", (e) => {
  playerSpan.innerText = "Rock";
  let userChoice = 0;

  RobotResponse(userChoice);
});

btnPaper.addEventListener("click", (e) => {
  playerSpan.innerText = "Paper";
  let userChoice = 1;

  RobotResponse(userChoice);
});

btnScissors.addEventListener("click", (e) => {
  playerSpan.innerText = "Scissors";
  let userChoice = 2;

  RobotResponse(userChoice);
});
