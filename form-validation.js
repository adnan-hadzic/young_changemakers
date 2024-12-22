document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".extended-contact form");
    const errorMessages = {
        fullname: "Full Name must be at least 2 characters long.",
        email: "Please enter a valid email address.",
        phone: "Phone Number must be at least 10 digits.",
        age: "Age must be between 18 and 100.",
        interests: "Please select at least one interest.",
        role: "Please select your role.",
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        let valid = true;

        
        const fullnameField = form.querySelector("#fullname");
        const fullnameError = form.querySelector("#fullname-error");
        if (fullnameField.value.trim().length < 2) {
            fullnameError.textContent = errorMessages.fullname;
            valid = false;
        } else {
            fullnameError.textContent = "";
        }

        
        const emailField = form.querySelector("#email");
        const emailError = form.querySelector("#form-email-error");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailError.textContent = errorMessages.email;
            valid = false;
        } else {
            emailError.textContent = "";
        }

        
        const phoneField = form.querySelector("#phone");
        const phoneError = form.querySelector("#phone-error");
        if (phoneField.value.trim().length < 10) {
            phoneError.textContent = errorMessages.phone;
            valid = false;
        } else {
            phoneError.textContent = "";
        }

        
        const ageField = form.querySelector("#age");
        const ageError = form.querySelector("#age-error");
        if (ageField.value < 18 || ageField.value > 100) {
            ageError.textContent = errorMessages.age;
            valid = false;
        } else {
            ageError.textContent = "";
        }

        
        const interestFields = form.querySelectorAll('input[name="interests"]:checked');
        if (interestFields.length === 0) {
            valid = false;
        }

        
        const roleField = form.querySelector('input[name="role"]:checked');
        if (!roleField) {
            valid = false;
        }

        
        if (valid) {
            toastr.success("Form successfully submitted!");
            form.reset(); 
        } else {
            toastr.error("Please fix the errors in the form!");
        }
    });
});
