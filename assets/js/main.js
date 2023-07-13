"use strict";

const rockButton = document.body.querySelector("#rock");
const paperButton = document.body.querySelector("#paper");
const scissorsButton = document.body.querySelector("#scissors");
// const radioRounds = document.body.querySelector("#rounds");
const radioRounds = document.body.querySelectorAll('input[name="rounds"]');
const buttonRounds = document.body.querySelector("#btn")

let rounds = 0;
let inputNumber;
let randomNumber;
let compScore = 0;
let userScore =0;
let gameCounter = 0;
let schnickSchnackSchnuckArray = ["Stein", "Papier", "Scheere"];


console.log(rounds);
console.log(gameCounter);



// for(const radioButton of radioRounds){
    //     if(radioButton.checked) {
        //         rounds = radioRounds.value;
        
        //         radioButton.addEventListener("change", function(event) {
            //             if(this.checked);
            //             console.log(this.value);
            //         })
            //     break;
            //     }
            // }
console.log(rounds);


function startNow(event) {
    rounds = radioRounds.value;
    console.log(rounds);
    event.preventDefault();
    console.log("Round: " + gameCounter);
    switch(rounds) {
        case (rounds<=5):
            if(gameCounter<=5 && userScore<=3 && compScore<=3) {
                letPlay();
            }
            else {
                console.log("Game Over, Your Score: "+ userScore + " ,ComputerScore: " + compScore);
            }
        break;
    }
}

function letPlay() {


function schnickSchnackSchnuck() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(`Computer: ${schnickSchnackSchnuckArray.at(randomNumber-1)}`);
}

rockButton.addEventListener("click",
function getInputNumber() {
    schnickSchnackSchnuck();
    inputNumber = document.body.querySelector("#rock").value;
    console.log(`User: ${schnickSchnackSchnuckArray.at(inputNumber-1)}`);

    event.preventDefault();

    if(randomNumber<2) {
        console.log("Unentschieden: Stein");
        compScore++;
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else if(randomNumber===2) {
        console.log("Papier schlaegt Stein");
        compScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else{
        console.log("Stein schlaegt Scheere");
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
})

paperButton.addEventListener("click",
function getInputNumber() {
    schnickSchnackSchnuck();
    inputNumber = document.body.querySelector("#paper").value;
    console.log(`User: ${schnickSchnackSchnuckArray.at(inputNumber-1)}`);
    event.preventDefault();

    if(randomNumber<2) {
        console.log("Papier schlaegt Stein");
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else if(randomNumber===2) {
        console.log("Unentschieden: Papier");
        compScore++;
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else{
        console.log("Scheere schlaegt Papier");
        compScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
})

scissorsButton.addEventListener("click",
function getInputNumber() {
    schnickSchnackSchnuck();
    inputNumber = document.body.querySelector("#scissors").value;
    console.log(`User: ${schnickSchnackSchnuckArray.at(inputNumber-1)}`);
    event.preventDefault();

    if(randomNumber<2) {
        console.log("Stein schlaegt Scheere");
        compScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else if(randomNumber===2) {
        console.log("Scheere schlaegt Papier");
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
    else{
        console.log("Unentschieden Scheere");
        compScore++;
        userScore++;
        gameCounter++;
        console.log("Computer: " + compScore);
        console.log("Dein Score: " + userScore);
        return inputNumber = 0;
    }
})
}

buttonRounds.addEventListener("click", startNow);

// function startSwitch() {
    // switch(inputNumber) {
    //     case 1:
            // if(randomNumber<2) {
            //     console.log("Unentschieden: Stein");
            //     compScore++;
            //     userScore++;
            //     gameCounter++;
            //     return inputNumber = 0;
            // }
            // else if(randomNumber===2) {
            //     console.log("Papier schlaegt Stein");
            //     compScore++;
            //     gameCounter++;
            //     return inputNumber = 0;
            // }
            // else{
            //     console.log("Stein schlaegt Scheere");
            //     return inputNumber = 0;
            //     gameCounter++;
            // }
            // break;
    // }
// }