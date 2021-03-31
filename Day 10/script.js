
function MainFunction(){
    input = document.getElementById("firstInput").nodeValue;
    console.log(input);

    document.getElementById("output").innerHTML = input + "<--- This is the input you gave.";

    document.getElementById("storyImage").src = 'Shredder.jpg';

};