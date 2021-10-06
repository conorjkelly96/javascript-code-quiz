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
    answers: {
      a: "<script>",
      b: "<js>",
      c: "<javascript>",
      d: "<code>",
    },
    correctAnswer: "a",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "<head>",
      b: "<body>",
      c: "<footer>",
      d: "<section>",
    },
    correctAnswer: "b",
  },
  {
    question: "Founder Brendan Eich created JavaScript in:",
    answers: {
      a: "10 hours",
      b: "10 days",
      c: "10 weeks",
      d: "10 months",
    },
    correctAnswer: "b",
  },
  {
    question: "To link external scripts, which syntax is correct?",
    answers: {
      a: "src=",
      b: "href=",
      c: "link=",
      d: "script=",
    },
    correctAnswer: "a",
  },
  {
    question:
      "I want to promt the user to input their name. Which syntax is correct?",
    answers: {
      a: "alertBox()",
      b: "msg()",
      c: "prompt()",
      d: "addEventListener.onClick()",
    },
    correctAnswer: "c",
  },
  {
    question: "How do you express a function in JavaScript",
    answers: {
      a: "const myFunction = Function ()",
      b: "var myFunction {function} =",
      c: "let myFunction = function []",
      d: "case function.Myfunction()",
    },
    correctAnswer: "a",
  },
  {
    question: "JavaScript Objects Properties can contain",
    answers: {
      a: "Primitive Values",
      b: "Objects",
      c: "Functions",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "The '%' operator in JavaScript is known as: ",
    answers: {
      a: "Exponentiation",
      b: "Division",
      c: "Modulus",
      d: "Decrement",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "CoffeScript",
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
      const questionsContainer = document.getElementById("question-element");
      questionsContainer.remove();
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = "Time Remaining: " + countdownClock;
    }
  };
  const clock = setInterval(timerTick, 1000);
};

// Render Questions - do i need to loop within this function
const renderQuestions = function () {
  const answerButton = document.createElement("button");
  answerButton.setAttribute("id", "answer-button");
  answerButton.textContent = "testing Button";
  console.log(answerButton);

  const questionString = document.createElement("p");
  questionString.setAttribute("class", "question-string");
  questionString.textContent = "Checking If It works";

  const questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "question-div");

  const questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("id", "question-element");
  questionsContainer.setAttribute("class", "question-element");

  questionsDiv.append(questionString, answerButton);
  questionsContainer.appendChild(questionsDiv);
  mainElement.appendChild(questionsContainer);
};

//

const answerValidation = function (myQuestions) {
  // function to validate the answers
  // get current question
  // get my questions
  // if statement (how to compare - data-attribute vs object value?):
  // if user choice = myQuestions.correctAnswer then
  // nothing, progress to next question
  // progress to next questions
  //  if != myQuestions.correctAnswer
  // the let countdownClock =- 5
};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestions();
};

startQuizButton.addEventListener("click", startQuiz);
console.log(startQuizButton);

const answerButton = document.getElementById("answer-button");
console.log(answerButton);

// answerButton.addEventListener("click", renderQuestions);
// console.log(answerButton, "click");
