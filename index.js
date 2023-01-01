let teamnum1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let score = 0;

function addOne(team) {
    score+=1;
    team.textContent = score;
}

function addTwo(team) {
    score+=2;
    team.textContent = score;
}

function addThree(team) {
    score+=3;
    team.textContent = score;
}

function reset() {
    score = 0;
    num1.textContent = score;
    num2.textContent = score;
}