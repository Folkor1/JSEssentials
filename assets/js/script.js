/* name field validation */

function inputStart() {
    if (input.value.match(/^[0-9A-Za-z]+$/) === null) {
        alert("Enter your name in Alphanumeric please");
} else {
    window.location.href = 'quiz.html';
    }
}

let input = document.getElementById("name-input");
let start = document.getElementById("start-button");
let nameField = document.getElementById("name-span");
start.addEventListener('click', inputStart);


/* insert name into leaderboard */

