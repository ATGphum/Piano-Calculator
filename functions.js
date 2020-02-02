
//adds 2 numbers together
function add(num1, num2){
    return num1 + num2;
    
}

//subtracts num2 from num1
function subtract(num1, num2){
    return num1 - num2;        
}

//multiplies num1 by num2
function multiply(num1, num2){
    return num1*num2;
}

//divides num1 by num2
function divide(num1, num2){
    return num1/num2;
}

//calls one of the operator functions depending on the symbol
function operate(num1, num2, symbol){
    var value;
    if(symbol == "+"){
        value = add(num1, num2);
    }
    else if(symbol == "-"){
        value = subtract(num1, num2);
    }
    else if(symbol == "x"){
        value = multiply(num1, num2);
    }
    else if(symbol == "/"){
        value = divide(num1, num2);
    }
    return value;
}

//add eventlisteners for every button

var zero = document.querySelector('#zero');
zero.addEventListener('click', () => appendDisplay(0));

var one = document.querySelector('#one');
one.addEventListener('click', () => appendDisplay(1));

var two = document.querySelector('#two');
two.addEventListener('click', () => appendDisplay(2));

var three = document.querySelector('#three');
three.addEventListener('click', () => appendDisplay(3));

var four = document.querySelector('#four');
four.addEventListener('click', () => appendDisplay(4));

var five = document.querySelector('#five');
five.addEventListener('click', () => appendDisplay(5));

var six = document.querySelector('#six');
six.addEventListener('click', () => appendDisplay(6));

var seven = document.querySelector('#seven');
seven.addEventListener('click', () => appendDisplay(7));

var eight = document.querySelector('#eight');
eight.addEventListener('click', () => appendDisplay(8));

var nine = document.querySelector('#nine');
nine.addEventListener('click', () => appendDisplay(9));

var dot = document.querySelector('#dot');
dot.addEventListener('click', () => appendDisplay('.'));

var plus = document.querySelector('#plus');
plus.addEventListener('click', () => appendDisplay('+'));

var minus = document.querySelector('#minus');
minus.addEventListener('click', () => appendDisplay('-'));

var times = document.querySelector('#times');
times.addEventListener('click', () => appendDisplay('x'));

var division = document.querySelector('#division');
division.addEventListener('click', () => appendDisplay('/'));

var del = document.querySelector('#del');
del.addEventListener('click', () => singleDel());

var clear = document.querySelector('#cl');
clear.addEventListener('click', () => clears());

var equals = document.querySelector('#equals');
equals.addEventListener('click', () => calculate());

//variable which stores state of screen
var screenState = "input";

//append a number to the display
function appendDisplay(input){
    var screen = document.querySelector('#screen');
    if(screenState == "output"){
        screen.textContent = input;
        screenState = "input";
    }
    else{
        screen.textContent += input;
    }
    storage(input);    
}

function appendResult(input){
    var screen = document.querySelector('#screen');
    screen.textContent = input;
    screenState = "output";
    reset();
}

//calls either numstore or symstore depending on the input for storage
function storage(input){
    if(typeof input == "number" || input == "."){
        numStorage(input);
    }
    else{
        symStorage(input);
    }
}

//array to store all the inputted numbers
var numStore = [];
//tracks the current number to store in array
var currNum = 0;
//array to store all the inputted symbols
var symStore = [];

//resets calculator
function reset(){
    numStore = [];
    symstore = [];
    currNum = 0;
}

function clears(){
    var screen = document.querySelector('#screen');
    screen.innerHTML = "<br>";
    reset();
}

//deletes the last entry in the calculator
function singleDel(){
    if(numStore.length > symStore.length){
        numStore.pop();
        currNum--;
    }
    else{
        symStore.pop();
    }
    var screen = document.querySelector('#screen');
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    console.log(numStore);
    console.log(symStore);
}

//calculates the answer from given arguments
function calculate(){
    for(var x = 0; x < numStore.length; x++){
        for(var i = 0; i < numStore.length; i++){
            if(symStore[i] == "x" || symStore[i] == "/"){
                numStore[i] = operate(parseFloat(numStore[i]), parseFloat(numStore[i+1]), symStore[i]);
                numStore.splice(i+1, 1);
                symStore.splice(i, 1);
                console.log(numStore);
                console.log(symStore);
            } 
        }
    }
    for(var x = 0; x < numStore.length; x++){
        for(var i = 0; i < numStore.length; i++){
            if(symStore[i] == "+" || symStore[i] == "-"){
                numStore[i] = operate(parseFloat(numStore[i]), parseFloat(numStore[i+1]), symStore[i]);
                numStore.splice(i+1, 1);
                symStore.splice(i, 1);
                console.log(numStore);
                console.log(symStore);
            }
        }
    }
    console.log(numStore[0]);
    appendResult(numStore[0]);
}

function numStorage(input){
    if(typeof numStore[currNum] == "undefined"){
        numStore[currNum] = "" + input;
    }
    else{
        numStore[currNum] += input;
    }
console.log(numStore);
console.log(symStore);

}

function symStorage(input){
    if(currNum == numStore.length){
        return;
    }
    symStore[currNum] = input;
    //append to current number stored
    currNum++;
    
console.log(numStore);
console.log(symStore);
}

//store the numbers in an array, forming a new element each time an operator button is pressed

//update the display



