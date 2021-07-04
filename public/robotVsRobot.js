const btnPlay = document.querySelector(".play");

const robot1Span = document.querySelector(".span-hand-1");
const robot2Span = document.querySelector(".span-hand-2");

const resultSpan = document.querySelector(".result-span");
const result = document.querySelector(".result");

const robot2Circle = document.querySelectorAll(".circle")[1];

function RobotResponse(userChoice) {
  btnPlay.style.pointerEvents = "none";

  /* between 0 and 2 */
  let rand = Math.floor(Math.random() * 3);

  /* animation */
  robot2Span.innerText = "";
  robot2Circle.classList.add("animate");
  setTimeout(() => {
    robot2Circle.classList.remove("animate");

    switch (rand) {
      case 0:
        robot2Span.innerText = "Rock";
        break;

      case 1:
        robot2Span.innerText = "Paper";
        break;

      case 2:
        robot2Span.innerText = "Scissors";
        break;

      default:
        alert("ERROR robot2-> [" + rand + "] robot1-> [" + userChoice + "]");
        break;
    }

    function displayResult(exclamation) {
      setTimeout(() => {
        result.style.display = "flex";
        resultSpan.innerText = exclamation;

        setTimeout(() => {
          result.style.display = "none";

          btnPlay.style.pointerEvents = "all";
        }, 1500);
      }, 500);
    }

    if (userChoice == rand) {
      let exclamation = "¯\\_(ツ)_/¯";
      resultSpan.style.color = "hsl(0 0% 20%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 0% 20%)";
      displayResult(exclamation);
    } else if (userChoice - rand == 1 || userChoice - rand == -2) {
      let exclamation = "Robot-1 wins";
      resultSpan.style.color = "limegreen";
      result.style.boxShadow = "0 0 0 3px limegreen";
      displayResult(exclamation);
    } else {
      let exclamation = "Robot-2 wins";
      resultSpan.style.color = "hsl(0 100% 50%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 100% 50%)";
      displayResult(exclamation);
    }
  }, 1500);
}

btnPlay.addEventListener("click", (e) => {
  /* between 0 and 2 */
  let randRobot1 = Math.floor(Math.random() * 3);

  switch (randRobot1) {
    case 0:
      robot1Span.innerText = "Rock";
      break;

    case 1:
      robot1Span.innerText = "Paper";
      break;

    case 2:
      robot1Span.innerText = "Scissors";
      break;

    default:
      alert("Error");
      break;
  }

  RobotResponse(randRobot1);
});
