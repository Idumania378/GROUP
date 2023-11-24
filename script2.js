function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Validate other input fields

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitButton = document.getElementById('submitButton');

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        submitButton.style.border = '2px solid red';
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        submitButton.style.border = '2px solid red';
        return;
    }

    // If all validations pass, set a green border color and proceed with form submission or other actions
    submitButton.style.border = '2px solid green';
    alert('Form submitted successfully!');
}

// Attach the validateForm function to the form's submit event
document.getElementById('admissions-form').addEventListener('submit', validateForm);
