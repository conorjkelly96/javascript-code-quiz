// Declaring Element Variables Globally
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");
const timerElement = document.createElement("div");

let countdownClock = 60;

const renderTimer = function () {
  timerElement.textContent = "Time Remaining " + countdownClock;
  timerElement.setAttribute("class", "header-content");
  timerElement.setAttribute("id", "clock");
  headerContainer.appendChild(timerElement);
};

const renderQuizOver = function () {
  // creating p tag
  const gameOverText = document.createElement("p");
  gameOverText.setAttribute("class", "");

  // creating div1 and appending child
  const gameOverDiv1 = document.createElement("div");
  gameOverDiv1.appendChild(gameOverText);

  // creating button
  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "startbtn");

  // creating div2 and appending child
  const gameOverDiv2 = document.createElement("div");
  gameOverDiv2.appendChild(retryButton);

  // final container and appending children
  const gameOverMainDiv = document.createElement("div");
  gameOverDiv2.appendChild(gameOverDiv1, gameOverDiv2);
};

const startTimer = function () {
  const timerElement = document.querySelector("#clock");

  const timerTick = function () {
    if (countdownClock <= 0) {
      clearInterval(timer);
      renderGameOver();
    } else {
      countdownClock -= 1;
      timerElement.textContent = "Time Remaining: " + countdownClock;
    }
    const clock = setInterval(countdownClock, 1000);
  };
};

const renderQuestions = function () {};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestions();
};

startQuizButton.addEventListener("click", startQuiz);
