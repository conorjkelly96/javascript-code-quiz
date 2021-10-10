const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

// Function to get from local storage and display high score
const highScoreList = function () {
  // variable to hold data
  const userScores = getFromLocalStorage("user-input", score);
  const userInitials = document.createElement("p");
  userInitials.setAttribute("Class", "Scores");
  userInitials.setAttribute("id", "Initials");
  userInitials.textContent = `Player: ${initals}`;
  const displayScores = document.createElement("p");
  displayScores.setAttribute("Class", "Scores");
  displayScores.setAttribute("id", "scores");
  displayScores.textContent = `Player Scores: ${scores}`;

  const container = document.querySelector("#start-quiz-div");
  console.log(container);
  container.appendChild(userInitials);
  container.appendChild(displayScores);
};

highScoreList();
