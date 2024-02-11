var showError = false;

function validatePassword() {
    document.getElementById("email").setCustomValidity("");
    document.getElementById("phone").setCustomValidity("");

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordMatchError = document.getElementById("password-match-error");

    if (password !== confirmPassword) {
        passwordMatchError.textContent = "Passwords must match!";
        showError = true
        return false;
    } else {
        showError = false;
        return true;
    }

}

function handleFormSubmit() {
    event.preventDefault();
    var passwordMatchError = document.getElementById("password-match-error")

    if (showError) {
        passwordMatchError.textContent = "Passwords must match!";
    } else {
        passwordMatchError.textContent = "";
        return true;
    }
}