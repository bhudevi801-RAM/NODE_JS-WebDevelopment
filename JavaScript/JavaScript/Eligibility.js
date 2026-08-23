// 1. Select the form element from the DOM matching your HTML ID
const votingForm = document.getElementById("loginform");

// 2. Add a submit event listener to process the form when the button is clicked
votingForm.addEventListener("submit", function(event) {
    
    // Prevent the default browser behavior (prevents the webpage from reloading)
    event.preventDefault();
    
    // 3. Extract the typed input value and explicitly convert it into a number
    const ageInput = document.getElementById("age").value;
    const age = Number(ageInput);
    
    // 4. Basic checking to make sure the user didn't submit an empty field
    if (ageInput === "") {
        alert("Please enter a valid age first!");
        return; // Stop execution
    }

    // 5. Run your conditional voting eligibility logic check
    if (age >= 18) {
        alert("Eligible for voting! ");
    }
    
    if (age < 18) {
        alert("Not Eligible for voting!");
    }
});
