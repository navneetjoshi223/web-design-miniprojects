$(document).ready(function() {
    // Email validation using regular expression (modify as needed)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;

    // Function to check and enable/disable the login button
    function checkLoginButton() {
        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        const emailIsValid = emailPattern.test(email);
        const usernameIsValid = /^[A-Za-z0-9 ]+$/.test(username);
        const passwordIsValid = password.length >= 8 && password.length <= 20;
        const confirmPasswordIsValid = password === confirmPassword;

        const allFieldsValid = emailIsValid && usernameIsValid && passwordIsValid && confirmPasswordIsValid;
        $('#loginButton').prop('disabled', !allFieldsValid);
    }

    // Event listeners for input fields
    $('#email').on('input', function() {
        const email = $(this).val();
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please use only Northeastern student email address!');
        } else {
            $('#emailError').text('');
        }
        checkLoginButton();
    });

    $('#username').on('input', function() {
        const username = $(this).val();
        if (!/^[A-Za-z0-9 ]+$/.test(username)) {
            $('#usernameError').text('Username can only contain letters, numbers, and spaces.');
        } else {
            $('#usernameError').text('');
        }
        checkLoginButton();
    });

    $('#password').on('input', function() {
        const password = $(this).val();
        if (password.length < 8) {
            $('#passwordError').text('Your password should have minimum 8 characters.');
        } else if (password.length > 20) {
            $('#passwordError').text('Password is too long');
        } else {
            $('#passwordError').text('');
        }
        checkLoginButton();
    });

    $('#confirmPassword').on('input', function() {
        const confirmPassword = $(this).val();
        const password = $('#password').val();
        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match');
        } else {
            $('#confirmPasswordError').text('');
        }
        checkLoginButton();
    });

    // Form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        localStorage.setItem('userName', username);
        window.location.href = "calculator-home.html";
    });
});
