function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordMatchError = document.getElementById("password-match-error");

    if (password !== confirmPassword) {
        passwordMatchError.textContent = "Passwords must match!";
        return false;
    } else {
        passwordMatchError.textContent = "";
        return true;
    }

}