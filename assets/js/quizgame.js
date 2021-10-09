// Declaring Element Variables Globally to be used in functions
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");
const mainElement = document.getElementById("main-element");

// countdown starting value
let countdownClock = 60;

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
    correctAnswer: "10 days",
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
    correctAnswer: "msg()",
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
  const gameOverText = document.createElement("p");
  gameOverText.setAttribute("class", "game-over-text");
  gameOverText.textContent =
    "You failed to complete the quiz in time - check the console 👀";

  const gameOverDiv1 = document.createElement("div");
  gameOverDiv1.appendChild(gameOverText);

  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "startbtn");
  retryButton.textContent = "Play Again";

  const gameOverDiv2 = document.createElement("div");
  gameOverDiv2.appendChild(retryButton);

  const gameOverMainDiv = document.createElement("div");
  gameOverMainDiv.setAttribute("class", "quiz");
  gameOverMainDiv.appendChild(gameOverDiv1);
  gameOverMainDiv.appendChild(gameOverDiv2);
  mainElement.appendChild(gameOverMainDiv);
  console.log("You can do better than that surely? 🤣🤣🤣");

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
  const currentQuestion = myQuestions[currentIndex];

  const questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "question-div");
  questionsDiv.setAttribute("id", "question-div");

  const questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("id", "question-element");
  questionsContainer.setAttribute("data-answer", currentQuestion.correctAnswer);
  questionsContainer.setAttribute("class", "question-element");

  const questionTitle = document.createElement("h2");
  questionTitle.setAttribute("id", "question");
  questionTitle.textContent = currentQuestion.question;
  questionsDiv.appendChild(questionTitle);

  questionsContainer.appendChild(questionsDiv);
  questionsContainer.addEventListener("click", answerValidation);

  mainElement.appendChild(questionsContainer);

  const renderAnswers = function (answer, index) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answers-btn");
    answerButton.setAttribute("id", index);
    answerButton.setAttribute("data-option", answer);
    answerButton.textContent = answer;
    questionsDiv.appendChild(answerButton);
  };

  currentQuestion.answers.forEach(renderAnswers);
};

const answerValidation = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;

  const correctAnswer = currentTarget.getAttribute("data-answer");
  const userAnswer = target.getAttribute("data-option");

  if (currentIndex < myQuestions.length - 1) {
    if (correctAnswer === userAnswer) {
      document.getElementById("question-element").remove();
      currentIndex++;
      renderQuestion();
      console.log(currentIndex);
      countdownClock += 5;
    } else {
      document.getElementById("question-element").remove();
      currentIndex++;
      console.log(currentIndex);
      countdownClock -= 5;
      renderQuestion();
    }
  } else {
    renderScore();
  }
};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestion();
};

const renderScore = function () {
  clearInterval(clock);
  document.getElementById("question-element").remove();
  const finalScore = countdownClock;
  console.log(finalScore);

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "score-div");
  scoreDiv.setAttribute("id", "score-div");

  const scoreContainer = document.createElement("div");
  scoreContainer.setAttribute("id", "score-container");
  scoreContainer.setAttribute("class", "score-container");

  const scoreHeader = document.createElement("h2");
  scoreHeader.setAttribute("id", "score-title");
  scoreHeader.textContent = `Your Score Is: ${countdownClock}`;

  const enterInitials = document.createElement("p");
  enterInitials.setAttribute("class", "user-initials");
  enterInitials.textContent = `Enter Initials:`;

  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("class", "submit-btn");
  submitButton.textContent = `Submit Score`;

  const userInitials = document.createElement("input");
  userInitials.setAttribute("id", "user-input");
  userInitials.setAttribute("class", "user-input");

  scoreContainer.appendChild(scoreDiv);
  scoreContainer.appendChild(scoreHeader);
  scoreContainer.appendChild(enterInitials);
  scoreContainer.appendChild(userInitials);
  scoreContainer.appendChild(submitButton);
  scoreContainer.addEventListener("click", answerValidation);

  mainElement.appendChild(scoreContainer);

  const saveData = function () {
    const input = document.getElementById("user-input");
    const localStorageContents =
      JSON.parse(localStorage.getItem("Initials")) || [];
    localStorageContents = localStorage.setItem("Initials", input.value);
    localStorage.setItem("Highscore", finalScore);
  };

  submitButton.addEventListener("click", saveData, []);
};

const initializeLocalStorage = function (key, defaultValue) {
  const userHighscores = JSON.parse(localStorage.getItem(key));

  if (!userHighscores) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const renderHighScore = function (event) {
  // 1. Get data from local storage - first call to local storage will be null
  // a. localStorage.getItem(Name of the key)
  // 2. If empty = true, create array messages = [hello]
  // 3. Set Local Storage
  //     localStorage.setItem('key', JSON.stringify(variable));
  //     4. When null = false, [Hello] will be returned,
  //     a. Const myArray = JSON.parse(datafromLS)
  //     myArray.Push(MyString)
};

startQuizButton.addEventListener("click", startQuiz);
