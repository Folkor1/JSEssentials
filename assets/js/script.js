/* name field validation */

let quizButtons = document.getElementsByClassName("main-nav");
let quizQuestion = document.getElementById("question-div");
let quizGame = document.getElementById("quiz-div");
let nameHeading = document.getElementById("name-div");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");

let questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
    "Question6",
    "Question7",
    "Question8",
    "Question9",
    "Question10",
];

let wrongAnswers = [
    "wrong1",
    "wrong2",
    "wrong3",
    "wrong4",
    "wrong5",
    "wrong6",
    "wrong7",
    "wrong8",
    "wrong9",
    "wrong10",
]

let randomQuestions = ["answer1", "answer2", 'answer3', "answer4"];

function inputStart() {
    if (input.value.match(/^[0-9A-Za-z]+$/) !== null) {
        input.style.display = "none";
        start.style.display = "none";
        nameHeading.style.display = "none";
        quizGame.style.display = "block";
        getData();
} else {
    alert("Enter your name in Alphanumeric please");
    }
}

function getData() {
    quizQuestion.innerText = questions[Math.floor(Math.random() * questions.length)];
    
}

start.addEventListener('click', inputStart);