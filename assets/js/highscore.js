let currentIndex = 0;

const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");
  console.log(latestScores);
  const resultsCycle = latestScores[currentIndex];
  console.log(resultsCycle);
  console.log(latestScores[3].score);

  for (let i = 0; i < latestScores.length; i++) {
    console.log(i);
    scoreList = document.createElement("p");
    console.log(scoreList);
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${resultsCycle.initials} || Player Score: ${resultsCycle.score}`;
    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  }
};

highScoreList();
