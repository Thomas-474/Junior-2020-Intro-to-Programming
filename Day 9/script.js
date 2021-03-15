// while loop checks to see if the condition is true before running the statement
var counter1 = 0;
while(counter1 < 0){
    console.log("mmmm... donuts. " + counter1);
    counter1 = counter1 + 2;
}
console.log('done');


// do while loop runs the statement first, then checks to see if the condition is true. If the condition is true, then the statement will run again
var counter2 = 0;
do{
    console.log("mmmm... donuts. " + counter2);
    counter2 = counter2 + 2;
}
while(counter2 < 0);
console.log('done');