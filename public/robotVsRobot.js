const btnPlay = document.querySelector(".play");

const robot1Span = document.querySelector(".span-hand-1");
const robot2Span = document.querySelector(".span-hand-2");

const resultSpan = document.querySelector(".result-span");
const result = document.querySelector(".result");

const circles = document.querySelectorAll(".circle");

function RobotResponse(randRobot1) {
  btnPlay.style.pointerEvents = "none";

  robot1Span.innerText = "";
  robot2Span.innerText = "";

  /* between 0 and 2 */
  let randRobot2 = Math.floor(Math.random() * 3);

  /* animation */
  circles[0].classList.add("animate");
  circles[1].classList.add("animate");

  setTimeout(() => {
    circles[0].classList.remove("animate");
    circles[1].classList.remove("animate");

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
        alert("ERROR robot-> [" + randRobot2 + "] user-> [" + randRobot1 + "]");
        break;
    }

    switch (randRobot2) {
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
        alert(
          "ERROR robot2-> [" + randRobot2 + "] robot1-> [" + randRobot1 + "]"
        );
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

    if (randRobot1 == randRobot2) {
      let exclamation = "Tie";
      resultSpan.style.color = "hsl(0 0% 20%)";
      result.style.boxShadow = "0 0 0 3px hsl(0 0% 20%)";
      displayResult(exclamation);
    } else if (randRobot1 - randRobot2 == 1 || randRobot1 - randRobot2 == -2) {
      let exclamation = "Robot-1 wins";
      resultSpan.style.color = "limegreen";
      result.style.boxShadow = "0 0 0 3px limegreen";
      displayResult(exclamation);
    } else {
      let exclamation = "Robot-2 wins";
      resultSpan.style.color = "red";
      result.style.boxShadow = "0 0 0 3px red";
      displayResult(exclamation);
    }
  }, 1500);
}

btnPlay.addEventListener("click", (e) => {
  /* between 0 and 2 */
  let randRobot1 = Math.floor(Math.random() * 3);

  RobotResponse(randRobot1);
});
