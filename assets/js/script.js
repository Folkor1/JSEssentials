/* name field validation */

let quizButtons = document.getElementsByClassName("quiz-but");
let quizQuestion = document.getElementById("question-div");
let quizGame = document.getElementById("quiz-div");
let nameHeading = document.getElementById("name-div");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");

let questions = 
    {
    1: "1. Question",
    2: "2. Question",
    3: "3. Question",
    4: "4. Question",
    5: "5. Question",
    6: "6. Question",
    7: "7. Question",
    8: "8. Question",
    9: "9. Question",
    10: "10. Question",
    11: "11. Question",
    12: "12. Question",
    13: "13. Question",
    14: "14. Question",
    15: "15. Question"
    }

let correctAnswers = [
    "1 Correct",
    "2 Correct",
    "3 Correct",
    "4 Correct",
    "5 Correct",
    "6 Correct",
    "7 Correct",
    "8 Correct",
    "9 Correct",
    "10 Correct",
    "11 Correct",
    "12 Correct",
    "13 Correct",
    "14 Correct",
    "15 Correct",
]

let incorrectAnswers = [
    "Incorrect1",
    "Incorrect2",
    "Incorrect3",
    "Incorrect4",
    "Incorrect5",
    "Incorrect6",
    "Incorrect7",
    "Incorrect8",
    "Incorrect9",
    "Incorrect10",
    "Incorrect11",
    "Incorrect12",
    "Incorrect13",
    "Incorrect14",
    "Incorrect15"
]

/* function that validates the input field and starts the quiz*/

function inputStart() {
    if (input.value.match(/^[0-9A-Za-z]+$/) !== null) {
        input.style.display = "none";
        start.style.display = "none";
        nameHeading.style.display = "none";
        quizGame.style.display = "block";
        getQuestion();
} else {
    alert("Enter your name in Alphanumeric please");
    }
}

/* gets random question and correct answer, then calls other functions for incorrect answers */

function getQuestion() {
    quizQuestion.innerText = Object.values(questions)[0];
    quizButtons[Math.floor(Math.random() * 4)].innerText = correctAnswers[0];
    getIncorrectAnswers1();
    getIncorrectAnswers2();
    getIncorrectAnswers3();
    getIncorrectAnswers4();
}

/* functions to get incorrect answers in buttons if empty */

function getIncorrectAnswers1() {
    if (quizButtons[0].innerText === "") {
        quizButtons[0].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
}
}

function getIncorrectAnswers2() {
    if (quizButtons[1].innerText === "") {
        quizButtons[1].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
}
}

function getIncorrectAnswers3() {
    if (quizButtons[2].innerText === "") {
        quizButtons[2].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
}
}

function getIncorrectAnswers4() {
    if (quizButtons[3].innerText === "") {
        quizButtons[3].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
}
}  

function change() {
    let i = +parseInt(quizQuestion.innerText);
    quizQuestion.innerText = Object.values(questions)[i];
    quizButtons[Math.floor(Math.random() * 4)].innerText = correctAnswers[i];
    button1();
}

function button1() {
    let i = parseInt(quizQuestion.innerText);
    if (i != parseInt(correctAnswers[1])) {
        for (let y = 0; y < 4; y++)
            quizButtons[y].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
        }
        
    }

for (let i = 0; i < 4; i++) {
    quizButtons[i].addEventListener('click', change);
    }

start.addEventListener('click', inputStart);