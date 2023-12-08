const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorALL('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBar = document.querySelector('#question');

let currentQuestiom = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question1: 'JavaScript is an ________ langauge?',
        option1: 'Object-Oriented',
        option2: 'Object-Based',
        option3: 'Procedual',
        option4: 'None of the above',
        answer: 1,
    },
    {
        question25: 'Which of the following keywords is used to define a variable in Javascript?',
        option1: 'var',
        option2: 'let',
        option3: 'Both A and B',
        option4: 'None of the above',
        answer: 3,
    },
    {
        question3: 'Which of the following methods can be used to display data in some form using Javascript?',
        option1: 'document.write()',
        option2: 'console.log()',
        option3: 'window.alert()',
        option4: 'All of the above',
        answer: 4,
    },
    
    {
        question4: 'How can a datatype be declared to be a constant type?',
        option1: 'const',
        option2: 'var',
        option3: 'let',
        option4: 'constant',
        answer: 1,
    },

    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        option1: 'stringify()',
        option2: 'parse()',
        option3: 'convert()',
        option4: 'None of the Above',
        answer: 1,
    },
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choices.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.daataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
            'incorrect'
        
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion
        
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()




