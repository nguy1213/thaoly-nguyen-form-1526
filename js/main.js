// DECLARING VARIABLES

const submitButton = document.getElementById("submit-button");

const fullNameInput = document.getElementById("full-name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// READY TO START CODING

function validateForm() {

    // START WITH 2 EMPTY BUCKETS

    const data = {};

    const errors = {};

    clearErrorStyles();

    // FULL NAME VALIDATION

    const fullNameValue = fullNameInput.value.trim();

    if (fullNameValue !== "") {data.fullName = fullNameValue;}
    else {
        errors.fullName = "Full name is missing";
        fullNameInput.classList.add("input-error");
    }

    // EMAIL VALIDATION

    const emailValue = emailInput.value.trim();

    if (emailValue !== "") {

        if (emailPattern.test(emailValue)) {data.email = emailValue;} 
        else {
            errors.email = "Email format is invalid";
            emailInput.classList.add("input-error");
        }

    } else {
        errors.email = "Email is missing";
        emailInput.classList.add("input-error");
    }


    // MESSAGE VALIDATION

    const messageValue = messageInput.value.trim();

    if (messageValue !== "") {
        data.message = messageValue;
    } else {
        errors.message = "Message is missing";
        messageInput.classList.add("input-error");
    }


    // FEEDBACK / ERRORS

    if (Object.keys(errors).length > 0) {
        console.log("ERRORS", errors);
    } else {
        console.log("COLLECTED DATA", data);
        clearForm();
    }
}


// Clear form
function clearForm() {
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}

// Remove error styles
function clearErrorStyles() {
    fullNameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");
}


// Register click event
submitButton.addEventListener("click", validateForm);
