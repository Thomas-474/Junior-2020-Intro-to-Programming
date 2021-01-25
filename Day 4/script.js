// Can change a var or word that shows up multiple times throughout the whole file by right clicking on one of them and selecting "Rename Symbol"
let playerChar = {
    type: "Black Knight",
    numLegs: 2,
    numArms: 2,
    quote: function(){ return "Tis but a scratch."}
};

console.log(playerChar.numArms);
console.log(playerChar.numLegs);
console.log(playerChar.type);

playerChar.numArms = playerChar.numArms - 1;
console.log("You have " + playerChar.numArms + " arm " + playerChar.quote());

playerChar.numArms = playerChar.numArms - 1;
console.log("You have " + playerChar.numArms + " arms. " + playerChar.quote());

playerChar.numLegs = playerChar.numLegs - 1;
console.log("You have " + playerChar.numLegs + " leg. " + playerChar.quote());

playerChar.numLegs = playerChar.numLegs - 1;
console.log("You have " + playerChar.numLegs + " legs. " + playerChar.quote());


document.getElementById('demo').innerHTML = playerChar.type;