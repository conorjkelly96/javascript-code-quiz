// Declaring Element Variables Globally to be used in functions
const startQuizDiv = document.getElementById("start-quiz-div");
const startQuizHeader = document.getElementById("start-quiz-header");
const startQuizButtonDiv = document.getElementById("start-button-div");
const startQuizButton = document.getElementById("startbtn");
const headerContainer = document.getElementById("header");
const mainElement = document.getElementById("main-element");

// countdown starting value
let countdownClock = 2;

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
      renderQuizOver();
    } else {
      countdownClock -= 1;
      clockElement.textContent = "Time Remaining: " + countdownClock;
    }
  };
  const clock = setInterval(timerTick, 1000);
};

// Render Questions
const renderQuestions = function () {
  const questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("class", "question-element");
  questionsContainer.setAttribute("id", "question-element");
  console.log(questionsContainer);

  const questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("class", "question-div");

  // for (const question in myQuestions) {
  //   if (myQuestions.hasOwnProperty(question)) {
  //     const questionString = document.createElement("p");
  //     const answerButton = document.createElement("button");
  //     questionString.setAttribute("class", "question-string");
  //     questionString.textContent = "Checking If It works";
  //     questionsDiv.append(questionString, answerButton);

  //     console.log(question + " -> " + myQuestions[question]);
  //   }
  // }

  for (let i = 0; i < myQuestions.length; i++) {
    console.log("Only if a question is iterated", myQuestions[i]);

    // const questionString = document.createElement("p");
    // console.log(questionString);
    // const answerButton = document.createElement("button");
    // console.log(answerButton);

    // questionString.setAttribute("class", "question-string");
    // questionString.textContent = "Checking If It works";

    // questionsDiv.append(questionString, answerButton);
  }

  // Appending game containers to main element - leave last
  questionsContainer.appendChild(questionsDiv);
  mainElement.appendChild(questionsContainer);
};

// Start Quiz - remove elements, start timer and render question
const startQuiz = function () {
  startQuizDiv.remove();

  renderTimer();

  startTimer();

  renderQuestions();
};

startQuizButton.addEventListener("click", startQuiz);
