const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const playerSpan = document.querySelector(".span-hand-1");
const robotSpan = document.querySelector(".span-hand-2");

const resultSpan = document.querySelector(".result-span");
const result = document.querySelector(".result");

const circles = document.querySelectorAll(".circle");

let lastUserChoices = [];

function RobotResponse(userChoice) {
  btnRock.style.pointerEvents = "none";
  btnPaper.style.pointerEvents = "none";
  btnScissors.style.pointerEvents = "none";

  playerSpan.innerText = "";
  robotSpan.innerText = "";

  //save last N userChoices
  lastUserChoices.push(userChoice)

  //little ""AI"" lol
  //if same button 3 times or more
  //robot win
  if (lastUserChoices.length >= 3 &&
    userChoice === lastUserChoices[lastUserChoices.length-2] &&
    lastUserChoices[lastUserChoices.length-2] === lastUserChoices[lastUserChoices.length-3]) 
  {
    if (userChoice != 2) {
      rand = userChoice + 1;
      
    } else {
      rand = 0;
    }
  }

  /* between 0 and 2 */
  let rand = Math.floor(Math.random() * 3);

  /* animation */
  circles[0].classList.add("animate");
  circles[1].classList.add("animate");

  setTimeout(() => {
    circles[0].classList.remove("animate");
    circles[1].classList.remove("animate");

    switch (userChoice) {
      case 0:
        playerSpan.innerText = "Rock";
        break;

      case 1:
        playerSpan.innerText = "Paper";
        break;

      case 2:
        playerSpan.innerText = "Scissors";
        break;

      default:
        alert("ERROR robot-> [" + rand + "] user-> [" + userChoice + "]");
        break;
    }

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

    //DISPLAY RESULTS (win, lose, tie)
    if (userChoice == rand) {
      let exclamation = "¯\\_(ツ)_/¯ tie";

      resultSpan.style.color = "hsl(0 0% 20%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 0% 20%)";

      displayResult(exclamation);
    } else if (userChoice - rand == 1 || userChoice - rand == -2) {
      let exclamation = "\\(^▽^)/ you win";

      resultSpan.style.color = "var(--clr-2-dark)";
      result.style.boxShadow = "0 0 0 3px var(--clr-2-dark)";

      displayResult(exclamation);
    } else {
      let exclamation = "(-_-) you lose";

      resultSpan.style.color = "var(--clr-3-dark)";
      result.style.boxShadow = "0 0 0 3px var(--clr-3-dark)";

      displayResult(exclamation);
    }
  }, 1500);
}

/* EVENT LISTENERS SECTION */

btnRock.addEventListener("click", (e) => {
  let userChoice = 0;
  RobotResponse(userChoice);
});

btnPaper.addEventListener("click", (e) => {
  let userChoice = 1;
  RobotResponse(userChoice);
});

btnScissors.addEventListener("click", (e) => {
  let userChoice = 2;
  RobotResponse(userChoice);
});
