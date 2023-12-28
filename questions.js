// quiz questions below
const questions = [
    {
        question: "Javascript is an _______ language?",
        answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        correctAnswer: "Object-Oriented"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: ["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"],
        correctAnswer: "Ignores the statements" 
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: ["const", "var", "let", "constant"],
        correctAnswer: "const"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answers: ["Boolean", "Undefined", "Object", "Integer"],
        correctAnswer: "Object"
    },
];

// quiz functions below
function startQuiz() {
    // hide start button
    startBtn.style.display = "none";
    // display quiz container
    quizContainer.style.display = "block";
    // start timer
    startTimer();
    // display first question
    displayQuestion();
}

function displayQuestion() {
    // display question
    questionEl.textContent = questions[questionIndex].question;
    // display answers
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        // create button element
        const answerBtn = document.createElement("button");
        // add class to button
        answerBtn.classList.add("btn", "btn-primary", "btn-lg", "btn-block");
        // add text to button
        answerBtn.textContent = questions[questionIndex].answers[i];
        // append button to answer container
        answerContainer.appendChild(answerBtn);
    }
}

function checkAnswer(event) {
    // check if answer is correct
    if (event.target.textContent === questions[questionIndex].correctAnswer) {
        // display correct message
        correctMsg.style.display = "block";
    } else {
        // display incorrect message
        incorrectMsg.style.display = "block";
        // subtract time from timer
        timeLeft -= 10;
    }
    // increment question index
    questionIndex++;
    // check if there are more questions
    if (questionIndex < questions.length) {
        // clear answer container
        answerContainer.innerHTML = "";
        // display next question
        displayQuestion();
    } else {
        // end quiz
        endQuiz();
    }
}

function endQuiz() {
    // hide quiz container
    quizContainer.style.display = "none";
    // display end container
    endContainer.style.display = "block";
    // display final score
    finalScore.textContent = timeLeft;
    // stop timer
    clearInterval(timer);
}

function startTimer() {
    // set timer
    timer = setInterval(function() {
        // check if time is up
        if (timeLeft <= 0) {
            // end quiz
            endQuiz();
        } else {
            // decrement time
            timeLeft--;
            // display time
            timerEl.textContent = timeLeft;
        }
    }, 1000);
}

function saveScore() {
    // get initials
    const initials = initialsInput.value;
    // get scores from local storage
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    // create new score object
    const newScore = {
        initials: initials,
        score: timeLeft
    };
    // add new score to scores array
    scores.push(newScore);
    // save scores to local storage
    localStorage.setItem("scores", JSON.stringify(scores));
    // redirect to high scores page
    window.location.href = "highscores.html";
}





