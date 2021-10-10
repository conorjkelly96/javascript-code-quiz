// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");
  console.log(latestScores);
  let currentIndex = 0;
  const resultsCycle = latestScores[currentIndex];
  console.log(resultsCycle);
  console.log(latestScores[3].score);

  for (let i = 0; i < latestScores.length; i++) {
    console.log(i);
    const scoreList = document.createElement("p");
    console.log(scoreList);
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${resultsCycle.initials} || Player Score: ${resultsCycle.score}`;
    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  }
};

highScoreList();
