

function getComputerChoice(){
    curr = Math.floor(Math.random() * 3) + 1;
    if(curr == 1)
        alert("COMPUTER: ROCK");
    else if(curr == 2)
        alert("COMPUTER: PAPER");
    else
        alert("COMPUTER: SCISSORS");
    return curr;
}

// 1 == Rock 2 == Paper 3 == Scissors

function getUserChoice(handler){
    document.addEventListener('DOMContentLoaded', () => {
        const imgs = document.querySelectorAll('.rpspic');

        imgs.forEach(img => {
            img.addEventListener('click', () =>{
                const choice = img.alt;
                handler(choice);
            });
        });
    });
}

userScore = 0;
compScore = 0;

document.getElementById('cscore').textContent = compScore;
document.getElementById('uscore').textContent = userScore;

function run(curr){
    document.getElementById('cscore').textContent = compScore;
    document.getElementById('uscore').textContent = userScore;
    cChoice = getComputerChoice();
    uChoice = null;
    if(curr == "rock"){
        alert("USER: ROCK");
        uChoice = 1;
    }
    else if(curr == "paper"){
        alert("USER: PAPER");
        uChoice = 2;
    }
    else{
        alert("USER: SCISSORS");
        uChoice = 3;
    }

    if(cChoice == 1){
        if(uChoice == 2)
            ++userScore;
        else if(uChoice == 3)
            ++compScore;
    }
    else if(cChoice == 2){
        if(uChoice == 1)
            ++compScore;
        else if(uChoice == 3)
            ++userScore;
    }
    else{
        if(uChoice == 1)
            ++userScore;
        else if(uChoice == 2)
            ++compScore;
    }
    document.getElementById('cscore').textContent = compScore;
    document.getElementById('uscore').textContent = userScore;
}

getUserChoice(run);