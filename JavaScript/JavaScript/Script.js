//get the form
const loginform = document.getElementById("loginform");

// add submit event
loginform.addEventListener("submit", function(event) {
    //prevent form from submitting
    event.preventDefault();
    
    //get values 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    //checking
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    
    // email check 
    if (email.includes(" ")) {
        alert("Email should not contain spaces.");
        return;
    }
    if (!email.includes("@")) {
        alert("Email must contain @ symbol.");
        return;
    }
    if (!email.includes(".")) {
        alert("Email must contain (.).");
        return;
    }
    
    if (password === "") {
        alert("Please enter your password");
        return;
    }
    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }
    if (password.length > 20) {
        alert("Password cannot exceed 20 characters");
        return;
    }
    if (password.includes(" ")) {
        alert("Password should not contain spaces.");
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return;
    }
    // (FIXED: Corrected regex range from a-a to a-z)
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        return;
    }
    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        return;
    }
    if (!/[!@#$%^&*~]/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
    }
    
    alert("Login Successful");
});

