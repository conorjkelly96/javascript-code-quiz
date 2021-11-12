// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");

  // for (let i = 0; i < latestScores.length; i++) {
  //   const data = latestScores[i];
  //   const scoreList = document.createElement("p");
  //   scoreList.setAttribute("class", "score-tag");
  //   scoreList.setAttribute("id", "score-tag");
  //   scoreList.textContent = `Player Name: ${data.initials} || Player Score: ${data.score}`;
  //   const resultsDiv = document.getElementById("results-quiz-div");
  //   resultsDiv.appendChild(scoreList);
  // }
  const constructLatestScores = function (latestScores) {
    const scoreList = document.createElement("p");
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${latestScores.initials} || Player Score: ${latestScores.score}`;
    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  };

  latestScores.forEach(constructLatestScores);
};

highScoreList();

// CK 10/10/2021: Could refactor to be an onLoad event rather than a function call?
