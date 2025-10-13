// Tab Navigation
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show the selected tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Basic Calculator Functions
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Back Button Function
function goBack() {
    if (display.value) {
        deleteLast();
    } else {
        // If display is empty, go to basic calculator tab
        openTab('basic');
    }
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if ('0123456789+-*/.'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Initialize with Basic Calculator
document.addEventListener('DOMContentLoaded', function() {
    display.value = '';
});