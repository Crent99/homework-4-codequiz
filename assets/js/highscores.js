var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var mustReturn = document.querySelector("#mustReturn");

// Clears scores from local storage:
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retruns to main page:
mustReturn.addEventListener("click", function () {
    window.location.replace("./index.html");
});
// Displays scores:
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    
        for (var i = 0; i < allScores.length; i++) {
    
            var createLi = document.createElement("li");
            createLi.textContent = allScores[i].initials + " " + allScores[i].score;
            highScore.appendChild(createLi);
    
        }
}

