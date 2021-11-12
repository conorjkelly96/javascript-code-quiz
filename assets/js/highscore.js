// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");

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

window.onLoad(highScoreList());
