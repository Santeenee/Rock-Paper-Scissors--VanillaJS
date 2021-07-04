const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const playerSpan = document.querySelector(".span-hand-1");
const robotSpan = document.querySelector(".span-hand-2");

const resultSpan = document.querySelector(".result-span");
const result = document.querySelector(".result");

const robotCircle = document.querySelectorAll(".circle")[1];

function RobotResponse(userChoice) {
  btnRock.style.pointerEvents = "none";
  btnPaper.style.pointerEvents = "none";
  btnScissors.style.pointerEvents = "none";

  /* between 0 and 2 */
  let rand = Math.floor(Math.random() * 3);

  /* animation */
  robotSpan.innerText = "";
  robotCircle.classList.add("animate");
  setTimeout(() => {
    robotCircle.classList.remove("animate");

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
        alert("ERROR robot-> [" + rand + "] user-> [" + userChoice + "]");
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
      let exclamation = "Tie";
      resultSpan.style.color = "hsl(0 0% 20%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 0% 20%)";
      displayResult(exclamation);
    } else if (userChoice - rand == 1 || userChoice - rand == -2) {
      let exclamation = "YOU WIN";
      resultSpan.style.color = "limegreen";
      result.style.boxShadow = "0 0 0 3px limegreen";
      displayResult(exclamation);
    } else {
      let exclamation = "You lose";
      resultSpan.style.color = "hsl(0 100% 50%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 100% 50%)";
      displayResult(exclamation);
    }
  }, 1500);
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
