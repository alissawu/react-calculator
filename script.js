var firstValue, secondValue;

function returnResult() {
    firstValue = parseInt(document.getElementById('firstvalue').value);
    secondValue = parseInt(document.getElementById('secondvalue').value);
}

function add() {
    returnResult();
    displayResult(firstValue + secondValue);
}

function subtract() {
    returnResult();
    displayResult(firstValue - secondValue);
}

function multiply() {
    returnResult();
    displayResult(firstValue * secondValue);
}

function divide() {
    returnResult();
    if (secondValue !== 0) {
        displayResult(firstValue / secondValue);
    } else {
        alert("Cannot divide by zero!");
    }
}

function displayResult(value) {
    document.getElementById('result').innerText = value;
}

// Event listeners
document.getElementById("addbtn").addEventListener("click", add);
document.getElementById("subtbtn").addEventListener("click", subtract);
document.getElementById("multbtn").addEventListener("click", multiply);
document.getElementById("divbtn").addEventListener("click", divide);
