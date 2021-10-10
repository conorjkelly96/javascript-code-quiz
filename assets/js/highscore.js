// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");

  for (let i = 0; i < latestScores.length; i++) {
    console.log(i);
    const data = latestScores[i];
    console.log(data);
    const scoreList = document.createElement("p");
    console.log(scoreList);
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${data.initials} || Player Score: ${data.score}`;
    console.log(data.initials);
    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  }
};

highScoreList();
