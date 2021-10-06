// Declaring Element Variables Globally to be used in functions
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");
const mainElement = document.getElementById("main-element");

// countdown starting value
let countdownClock = 3;

// Questions Object Array
const myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<head>", "<body>", "<footer>", "<section>"],
    correctAnswer: "<body>",
  },
  {
    question: "Founder Brendan Eich created JavaScript in:",
    answers: ["10 hours", "10 days", "10 weeks", "10 months"],
    correctAnswer: "b",
  },
  {
    question: "To link external scripts, which syntax is correct?",
    answers: ["src=", "href=", "link=", "script="],
    correctAnswer: "src=",
  },
  {
    question:
      "I want to prompt the user to input their name. Which syntax is correct?",
    answers: ["alertBox()", "msg()", "prompt()", "addEventListener.onClick()"],
    correctAnswer: "c",
  },
  {
    question: "How do you express a function in JavaScript",
    answers: [
      "const myFunction = Function ()",
      "var myFunction {function} =",
      "let myFunction = function []",
      "case function.Myfunction()",
    ],
    correctAnswer: "const myFunction = Function ()",
  },
  {
    question: "JavaScript Objects Properties can contain",
    answers: ["Primitive Values", "Objects", "Functions", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "The '%' operator in JavaScript is known as: ",
    answers: ["Exponentiation", "Division", "Modulus", "Decrement"],
    correctAnswer: "Modulus",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm", "CoffeeScript"],
    correctAnswer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: "ESLint",
  },
];

let currentIndex = 0;
let currentQuestion = myQuestions[currentIndex];

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

  const gameOverDiv1 = document.createElement("div");
  gameOverDiv1.appendChild(gameOverText);

  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "startbtn");
  retryButton.textContent = "Back to main";

  const gameOverDiv2 = document.createElement("div");
  gameOverDiv2.appendChild(retryButton);

  const gameOverMainDiv = document.createElement("div");
  gameOverMainDiv.setAttribute("class", "quiz");
  gameOverMainDiv.appendChild(gameOverDiv1);
  gameOverMainDiv.appendChild(gameOverDiv2);
  mainElement.appendChild(gameOverMainDiv);
  console.log("You can do better than that surely you mug? 🤣🤣🤣");

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
      const questionsContainer = document.getElementById("question-element");
      questionsContainer.remove();
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = `Time Remaining: ${countdownClock}`;
    }
  };
  const clock = setInterval(timerTick, 1000);
};

// Render Questions
const renderQuestion = function () {
  const questionString = document.createElement("p");
  questionString.setAttribute("class", "question-string");
  questionString.textContent = "Checking If It works";

  const questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "question-div");

  const questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("id", "question-element");
  questionsContainer.setAttribute("class", "question-element");

  const questionTitle = document.createElement("h2");
  questionTitle.setAttribute("id", "question");
  questionTitle.textContent = currentQuestion.question;
  questionsDiv.appendChild(questionTitle);

  questionsContainer.appendChild(questionsDiv);
  mainElement.appendChild(questionsContainer);

  const renderAnswers = function (answer, index) {
    const answerButton = document.createElement("button");

    answerButton.setAttribute("class", "answers-btn");
    answerButton.setAttribute("id", index);
    answerButton.setAttribute("data-answer", answer);
    answerButton.textContent = answer;
    questionsDiv.appendChild(answerButton);
  };
  currentQuestion.answers.forEach(renderAnswers);
};

const answerValidation = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  console.log(currentTarget, target);

  const correctAnswer = currentQuestion.answer;
  const userAnswer = currentTarget;

  if (correctAnswer === userAnswer) {
    questionsDiv.remove();
    currentIndex++;
    renderQuestion();
  } else {
    countdownClock + 5;
    questionsDiv.remove();
    currentIndex++;
    renderQuestion();
  }
};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestion();

  answerButton.addEventListener(renderQuestion);
};

startQuizButton.addEventListener("click", startQuiz);

const answerButton = document.getElementById("answer-button");

// answerButton.addEventListener("click", renderQuestions);
// console.log(answerButton, "click");
