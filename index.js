let teamnum1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let score1 = 0;
let score2 = 0;

function addOne(team) {
    if(team === num1) {
        score1+=1;   
        team.textContent = score1;    
    }
    if(team === num2) {
        score2+=1;
        team.textContent = score2; 
    }
}

function addTwo(team) {
    if(team === num1) {
        score1+=2;   
        team.textContent = score1;    
    }
    if(team === num2) {
        score2+=2;
        team.textContent = score2; 
    }
}

function addThree(team) {
    if(team === num1) {
        score1+=3;   
        team.textContent = score1;    
    }
    if(team === num2) {
        score2+=3;
        team.textContent = score2; 
    }
}

function reset() {
    score1 = 0;
    score2 = 0;
    num1.textContent = score1;
    num2.textContent = score2;
}
