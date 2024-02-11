function validatePassword() {
    var password = document.getElementById("password").ariaValueMax;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password != confirmPassword) {
        alert("Passwords must match!");
        return false
    }

    return true;
}