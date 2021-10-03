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
  const gameOverDiv = document.createElement("div");
  gameOverDiv.setAttribute("class", "");
};

const startTimer = function () {
  const timerElement = document.querySelector("#clock");

  const timerTick = function () {
    if (countdownClock <= 0) {
      clearInterval(timer);

      const quizContainerDiv = document.querySelector("#quiz-container");
      quizContainerDiv.remove();

      render;
    }
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
