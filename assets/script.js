// Declaring Element Variables Globally
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");

// global countdown starting value
let countdownClock = 60;

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
  gameOverDiv2.append(gameOverDiv1, gameOverDiv2);
};

// starting countdown when game begins
const startTimer = function () {
  const clockElement = document.querySelector("#clock");

  const timerTick = function () {
    if (countdownClock <= 0) {
      clearInterval(timer);
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = "Time Remaining: " + countdownClock;
    }
    const clock = setInterval(timerTick, 1000);
    console.log(clock);
  };
};

const renderQuestions = function () {
  // Render Questions
};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestions();
};

startQuizButton.addEventListener("click", startQuiz);
