document.getElementById("pageTitle").innerHTML = "Welcome to Ninjaing 101";



function mathAddition(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo);
    document.getElementById("correctAnswer").innerHTML = "The correct answer is: " + parseFloat(numbOne + numbTwo);
};

function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo);
    document.getElementById("correctAnswer").innerHTML = "The correct answer is: " + parseFloat(numbOne - numbTwo);
};

function mathMultiplication(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo);
    document.getElementById("correctAnswer").innerHTML = "The correct answer is: " + parseFloat(numbOne * numbTwo);
};

function mathDivision(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo);
    document.getElementById("correctAnswer").innerHTML = "The correct answer is: " + parseFloat(numbOne / numbTwo);
};