const defaultNum = 9797;
const guessNum = "Please Guess Pin";
const wrongGuess = "Wrong Guess";
const correct = "Perfect";

const totalAtmt= 4;
let currentatmt = 1;

for(i=1; i<= totalAtmt; i++){
    userInput = parseInt(prompt(guessNum));
    if(userInput==defaultNum){
        alert(correct);
        break;
    }
    else
    {
        alert(`${wrongGuess}\n Remaining Attempts : ${totalAtmt - currentatmt}`);
    }
    currentatmt ++;
}
