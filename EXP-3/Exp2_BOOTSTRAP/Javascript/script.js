function loginValidity() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    // Username validation
    if (username === "") {
        alert("Please enter your username");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    // Password length validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    alert("Login successful!");

    return true;
}

function registrationValidity() {

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value.trim();
    let gender = document.getElementById("gender").value;
    let state = document.getElementById("state").value;
    let agreement = document.querySelector(
        'input[name="agreement"]'
    ).checked;

    // Name validation
    if (name === "") {
        alert("Please enter your full name");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    // Mobile validation
    if (mobile === "") {
        alert("Please enter your mobile number");
        return false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    // Gender validation
    if (gender === "") {
        alert("Please select your gender");
        return false;
    }

    // State validation
    if (state === "") {
        alert("Please select your state");
        return false;
    }

    // Checkbox validation
    if (!agreement) {
        alert("Please accept the agreement");
        return false;
    }

    alert("Registration successful!");

    return false;
}


