function validateRegistration() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name");
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
    // Password validation
    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    // Address validation
    if (address === "") {
        alert("Please enter your address");
        return false;
    }

    alert("Registration successful!");

    return true;
}
function loginValidity() {

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

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

    alert("Login successful!");

    return true;
}