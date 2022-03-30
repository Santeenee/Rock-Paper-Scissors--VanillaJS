const btnRock = document.querySelector(".rock"); //0
const btnPaper = document.querySelector(".paper"); //1
const btnScissors = document.querySelector(".scissors"); //2

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

  circles[0].style.border = "2px solid hsl(0, 0%, 60%)";
  circles[1].style.border = "2px solid hsl(0, 0%, 60%)";

  // between 0 and 2
  let robotChoice = Math.floor(Math.random() * 3);

  //it begins to animate
  circles[0].classList.add("animate");
  circles[1].classList.add("animate");

  //save last N userChoices
  lastUserChoices.push(userChoice)

  //little ""AI"" lol
  //if same button is pressed more than 3 times
  //robot always win
  if (lastUserChoices.length > 3 &&
    userChoice === lastUserChoices[lastUserChoices.length - 2] &&
    lastUserChoices[lastUserChoices.length - 2] === lastUserChoices[lastUserChoices.length - 3]) {
    if (userChoice !== 2) {
      robotChoice = userChoice + 1;
    } else {
      robotChoice = 0;
    }
  }
  console.log(`you [${userChoice}]\nrobot [${robotChoice}]`)

  setTimeout(() => {
    circles[0].classList.remove("animate"); //circle1
    circles[1].classList.remove("animate"); //circle2

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
        alert("ERROR robot-> [" + robotChoice + "] user-> [" + userChoice + "]");
        break;
    }

    switch (robotChoice) {
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
        alert("ERROR robot-> [" + robotChoice + "] user-> [" + userChoice + "]");
        break;
    }

    function displayResult(exclamation) {
      setTimeout(() => {
        result.style.opacity = 0; //preparing animation
        result.style.display = "flex";
        resultSpan.innerText = exclamation;
        result.classList.add('animate-result');

        setTimeout(() => {
          result.classList.remove('animate-result');
          result.style.display = "none";

          btnRock.style.pointerEvents = "all";
          btnPaper.style.pointerEvents = "all";
          btnScissors.style.pointerEvents = "all";
        }, 1500);
      }, 500);
    }

    //DISPLAY RESULTS (win, lose, tie)
    if (userChoice == robotChoice) {
      let exclamation = "¯\\_(ツ)_/¯ tie";

      resultSpan.style.color = "hsl(0 0% 20%)";
      result.style.boxShadow = "0 0 50px 3px hsl(0 0% 60%)";

      displayResult(exclamation);
    } else if (userChoice - robotChoice == 1 || userChoice - robotChoice == -2) {
      let exclamation = "\\(^▽^)/ you win";

      resultSpan.style.color = "var(--clr-2-dark)";
      result.style.boxShadow = "0 0 50px 3px var(--clr-2)";

      displayResult(exclamation);

      setTimeout(() => {
        circles[0].style.border = '3px solid var(--clr-2)';
      }, 500);
    } else {
      let exclamation = "(-_-) you lose";

      resultSpan.style.color = "var(--clr-3-dark)";
      result.style.boxShadow = "0 0 50px 3px var(--clr-3)";

      displayResult(exclamation);

      setTimeout(() => {
        circles[1].style.border = '3px solid var(--clr-3)';
      }, 500);
    }
  }, 1500);
}

/* EVENT LISTENERS */

btnRock.addEventListener("click", () => {
  let userChoice = 0;
  RobotResponse(userChoice);
});

btnPaper.addEventListener("click", () => {
  let userChoice = 1;
  RobotResponse(userChoice);
});

btnScissors.addEventListener("click", () => {
  let userChoice = 2;
  RobotResponse(userChoice);
});
