/* #region Random Number Generator  */
function randomNumberGenerator(randomNumber){
    var randomNumber = Math.floor(Math.random()*10+1);
    console.log("Random Number is: " + randomNumber);
    document.getElementById("theRandomNumber").innerHTML = "The Number is: " + randomNumber;
    return randomNumber;
}
randomNumber = randomNumberGenerator();
/* #endregion */
var allGuesses = [];
var playerScore = 0;

function myFunction(){
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;

    if(allGuesses.includes(playerGuesses)){
        document.getElementById("duplicateNumber").innerHTML = "Yo... you already guessed that number.";
        console.log("!!!!!!!!!!!");
        allGuesses.pop();
    } else{
        document.getElementById("duplicateNumber").innerHTML = " ";
        
    };



    if (playerGuesses == randomNumber){
        var text = "Score is going up!";
        document.getElementById("message").innerHTML = text;
        playerScore = playerScore + 5;

    } else{
        var text = "Oh no... score is going down.";
        document.getElementById("message").innerHTML = text;
        playerScore = playerScore - 2;
    }
    document.getElementById("playerScore").innerHTML = playerScore;

    allGuesses.push(" " + playerGuesses);
    document.getElementById("numbersGuessed").innerHTML = allGuesses;
    console.log(allGuesses);
};
