const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");
  const latestArray = [latestScores];
  let currentIndex = 0;
  console.log(latestArray);

  const renderScores = function (scores, index) {
    scoreList = document.createElement("p");
    console.log(scoreList);
    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", index);
    scoreList.setAttribute("data-option", scores);
    scoreList.textContent = "latestScores.score";

    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  };
  latestArray.scores.forEach(renderScores);
};

highScoreList();
