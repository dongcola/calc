let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    display.value = Math.sin(eval(display.value));
}

function calculateCos() {
    display.value = Math.cos(eval(display.value));
}

function calculateTan() {
    display.value = Math.tan(eval(display.value));
}
