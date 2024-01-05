const p1 = {
    score: 0,
    button: document.querySelector("#p1btn"),
    display: document.querySelector("#playerOneScore")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2btn"),
    display: document.querySelector("#playerTwoScore")
}



/*
const p1Button = document.querySelector("#p1btn");
const p2Button = document.querySelector("#p2btn");
const p1Display = document.querySelector("#playerOneScore");
const p2Display = document.querySelector("#playerTwoScore");
let p1Score = 0;
let p2Score = 0;
*/

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
        
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
    /*
    if(!isGameOver) {
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-danger")
            p1Display.classList.add("has-text-success")
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
        
    }
    */
});

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
    /*
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-danger")
            p2Display.classList.add("has-text-success")
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
        
    }
    */
});

winningScoreSelect.addEventListener("change", function () {
    // this refers to the current object we are in. In this case the winningScoreSelect
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}