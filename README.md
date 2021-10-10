# JavaScript Coding Quiz

## About the project

The goal for this project is to construct a JavaScript quiz which demonstrates dynamic DOM manipulation skills. The site functionality relies heavily on user interaction mainly via answer selection and user information. As the user progresses through the quiz, the time remaining on the quiz is dynamically updated, reflecting the user's score.

For every wrong answer, a deduction of 5 seconds is taken from the clock, with every correct answer a reward of an additional 5 seconds. Once the last question's answer has been submitted, the user is presented their their score (remaining seconds) and is asked to input their initials, in which both values are saved in local storage. The user can navigate to the 'Highscores' page to see their highscore leaderboard, sourcing information from local storage.

## Original Website

Below is a screenshot of the welcome page users see upon window load.

![Original Website](./javascript-code-quiz/assets/images/main-page-record-load.png)

## Technologies Used

- HTML
- CSS
- JavaScript

## Link to GitHub Pages

[Click here!](https://conorjkelly96.github.io/javascript-code-quiz/)

## Solution Overview

### Question Structure

The game logic is heavily dependant upon how the questions are stored in terms of question name, choice of answers and correct answer.

I created an `array`of `objects` to achieve this as demonstrated below:

```javascript
const myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>",
  },
```

The object values were then used as comparators against the user's selection. To match `myQuestion.correctAnswer` with the user selection, I assigned `data-attributes` to each button. If the values matched, the answer was correct. If they didn't match, then the answer was wrong:

```javascript
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
```

### Local Storage

Local storage was used at the end of the game to store the user's result. Once submitted alongside a username, the user could navigate to `highscores.html` to view the leader board. Upon window load, the user would see their latest scores in that browser session:

```javascript
// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");

  for (let i = 0; i < latestScores.length; i++) {
    const data = latestScores[i];
    const scoreList = document.createElement("p");
    console.log(scoreList);
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${data.initials} || Player Score: ${data.score}`;
    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  }
};
```

A snapshot of the leaderboard is below:

![Local Storage](./javascript-code-quiz/assets/images/localstorage.png)
