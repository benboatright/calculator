//add comments
function getPlus(){
  let number1 = document.querySelector('#result').textContent;
  document.querySelector('#number1').textContent = number1;
  document.querySelector('#operator').textContent = "add";
  clearScreen()
}

function getMinus(){
  let number1 = document.querySelector('#result').textContent;
  document.querySelector('#number1').textContent = number1;
  document.querySelector('#operator').textContent = "minus";
  clearScreen()
}

function getMult(){
  let number1 = document.querySelector('#result').textContent;
  document.querySelector('#number1').textContent = number1;
  document.querySelector('#operator').textContent = "mult";
  clearScreen()
}

function getDivide(){
  let number1 = document.querySelector('#result').textContent;
  document.querySelector('#number1').textContent = number1;
  document.querySelector('#operator').textContent = "divide";
  clearScreen()
}

function one() {
  document.querySelector('#result').innerHTML += 1;
}
function two() {
  document.querySelector('#result').innerHTML += 2;
}
function three() {
  document.querySelector('#result').innerHTML += 3;
}
function four() {
  document.querySelector('#result').innerHTML += 4;
}
function five() {
  document.querySelector('#result').innerHTML += 5;
}
function six() {
  document.querySelector('#result').innerHTML += 6;
}
function seven() {
  document.querySelector('#result').innerHTML += 7;
}
function eight() {
  document.querySelector('#result').innerHTML += 8;
}
function nine() {
  document.querySelector('#result').innerHTML += 9;
}
function zero() {
  document.querySelector('#result').innerHTML += 0;
}

function operate() {
  let num1 = document.querySelector('#number1').textContent;
  let num2 = document.querySelector('#result').textContent;
  let operator = document.querySelector('#operator').textContent;

  let number1 = Number(num1);
  let number2 = Number(num2);

  if (operator === 'add'){
    document.querySelector('#result').innerHTML = (number1 + number2);
  } else if (operator === 'minus'){
    document.querySelector('#result').innerHTML = (number1 - number2);
  } else if (operator === 'mult'){
    document.querySelector('#result').innerHTML = (number1 * number2);
  } else {
    document.querySelector('#result').innerHTML = (number1 / number2);
  }
}

function reset() {
  document.getElementById('result').textContent = '';
  document.getElementById('operator').textContent = '';
  document.getElementById('number1').textContent = '';
}

function clearScreen() {
  document.getElementById('result').textContent = '';
}
