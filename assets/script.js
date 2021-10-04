// Declaring Element Variables Globally
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");
const mainElement = document.getElementById("main-element");

// global countdown starting value
let countdownClock = 2;

// Questions globally
const myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<script>"
      b: "<js>"
      c: "<javascript>"
      d: "<code>"
    },
    correctAnswer: "a",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

// Render Timer Function
const renderTimer = function () {
  const timerElement = document.createElement("div");
  timerElement.textContent = "Time Remaining " + countdownClock;
  timerElement.setAttribute("class", "header-content");
  timerElement.setAttribute("id", "clock");
  headerContainer.appendChild(timerElement);
};

// Render Quiz Over - Only when the user completes the quiz
const renderQuizOver = function () {
  // creating p tag
  const gameOverText = document.createElement("p");
  gameOverText.setAttribute("class", "game-over-text");
  gameOverText.textContent =
    "You failed to complete the quiz in time - check the console 👀";

  // creating div1 and appending child
  const gameOverDiv1 = document.createElement("div");
  gameOverDiv1.appendChild(gameOverText);

  // creating button
  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "startbtn");
  retryButton.textContent = "Back to main";

  // creating div2 and appending child
  const gameOverDiv2 = document.createElement("div");
  gameOverDiv2.appendChild(retryButton);

  // final container, appending children & append to main
  const gameOverMainDiv = document.createElement("div");
  gameOverMainDiv.setAttribute("class", "quiz");
  gameOverMainDiv.appendChild(gameOverDiv1);
  gameOverMainDiv.appendChild(gameOverDiv2);
  mainElement.appendChild(gameOverMainDiv);
  console.log("You can do better than that, surely? 🤣🤣🤣");

  // function to refresh page and return to main
  const refreshPage = function () {
    window.location.reload();
  };

  retryButton.addEventListener("click", refreshPage);
};

// starting countdown when game begins
const startTimer = function () {
  const clockElement = document.querySelector("#clock");

  const timerTick = function () {
    if (countdownClock <= 0) {
      clearInterval(clock);
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = "Time Remaining: " + countdownClock;
    }
  };
  const clock = setInterval(timerTick, 1000);
};

// Render Questions
const renderQuestions = function () {};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestions();
};

startQuizButton.addEventListener("click", startQuiz);
