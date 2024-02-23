// Controlejs.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before attaching event listeners

    const annulerButton = document.getElementById('Annuler');

    if (annulerButton) {
        // Check if the button exists
        annulerButton.addEventListener('click', function () {
            // Handle the click event
            // Reset form fields here
            document.getElementById('yourInputField1').value = '';
            document.getElementById('yourInputField2').value = '';
            // Add more lines for other form fields
        });
    }
});
