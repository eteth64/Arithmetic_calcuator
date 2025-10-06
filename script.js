document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    display.value = "0";

    window.appendToDisplay = function(value) {
        if (display.value === "0") display.value = value;
        else display.value += value;
    };

    window.clearDisplay = function() {
        display.value = "0";
    };
});




function deleteLast() {
    display.value = display.value.slice(0, -1);
}
deleteLast();

function absoluteValue() {
    display.value = Math.abs(parseFloat(display.value));
}

function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function square() {

    display.value = Math.pow(parseFloat(display.value), 2);
}

function power() {

    display.value += "**";
}

function percentage() {
    display.value = parseFloat(display.value) / 100;
}

function cube() {
    try {
        display.value = Math.pow(eval(display.value), 3);
    } catch {
        display.value = "Error";
    }
}

function inverse() {
    display.value = 1 / parseFloat(display.value);
}

function log() {
    display.value = Math.log10(parseFloat(display.value));
}
// Helper function to safely evaluate the display
function safeEval() {
    return display.value ? eval(display.value) : 0;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}