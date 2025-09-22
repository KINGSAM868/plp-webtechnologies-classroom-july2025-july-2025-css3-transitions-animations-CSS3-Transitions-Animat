// A global variable to demonstrate global scope. It is visible throughout the entire script.
let globalGreeting = "The journey is just beginning!";

document.addEventListener('DOMContentLoaded', () => {

    /*
     * Part 2: JavaScript Functions — Scope, Parameters & Return Values
     *
     * This section demonstrates how to build reusable, modular functions.
     */

    // This function takes two parameters and returns a calculated value.
    function calculateArea(length, width) {
        // A local variable, only accessible inside this function.
        let calculationMessage = "Calculating area...";
        console.log(globalGreeting); // Can access the global variable.
        console.log(calculationMessage); // Can access the local variable.
        return length * width;
    }

    // Event listeners for the calculation form.
    const calculateBtn = document.getElementById('calculate-btn');
    const lengthInput = document.getElementById('length-input');
    const widthInput = document.getElementById('width-input');
    const resultDisplay = document.getElementById('result-display');

    calculateBtn.addEventListener('click', () => {
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);

        if (!isNaN(length) && !isNaN(width)) {
            // Call the calculateArea function with parameters and get the returned value.
            const area = calculateArea(length, width);
            resultDisplay.textContent = `The area is: ${area} cm²`;
        } else {
            resultDisplay.textContent = "Please enter valid numbers.";
        }
    });

    // We can't access the 'calculationMessage' variable here because it's in a different scope.
    // The following line would cause an error if it wasn't commented out.
    // console.log(calculationMessage); // This would result in a ReferenceError.


    /*
     * Part 3: Combining CSS Animations with JavaScript
     *
     * This section uses a function to trigger a CSS animation by manipulating a class.
     */

    // This function adds a class to an element to trigger a CSS animation.
    // It takes an element ID as a parameter to be reusable.
    function revealQuote(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            // Add the 'animate-reveal' class. This class contains the animation rules in styles.css.
            element.classList.add('animate-reveal');
        }
    }

    // Event listener for the "Reveal Quote" button.
    const triggerBtn = document.getElementById('trigger-btn');
    triggerBtn.addEventListener('click', () => {
        // Call the reusable function to trigger the animation on the card element.
        revealQuote('quote-card');
    });

});
