// Variables & Data Types
// Operators
// Condition
// Functions
// DOM Manipulation
// DOM Events
// Using Date Object
// Comments

const form = document.querySelector("form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const name = document.querySelector("#fullName").value;
    const contact = document.querySelector("#contact").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const alert = document.querySelector("#alert");
    console.log("Name:", name);
    console.log("Contact:", contact);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name == "") {
        alert.textContent = "Full Name is required!";
        alert.classList.add('error');
    } else if (contact == "") {
        alert.textContent = "Contact is required!";
        alert.classList.add('error');
    } else if (email == "") {
        alert.textContent = "Email is required!";
        alert.classList.add('error');
    } else {
        alert.textContent = "Thank you for messaging us! We will contact you shortly";
        alert.classList.add('success');
    }
}

const message = document.querySelector("#message");

message.addEventListener('keyup', countCharacter);

function countCharacter() {
    const countElement = document.querySelector("#characterCount");
    countElement.style.color = "white";
    const characterCount = this.value.length;
    countElement.textContent = characterCount + " Characters";
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', handleReset);

function handleReset() {
    const countElement = document.querySelector("#characterCount");
    const alert = document.querySelector("#alert");
    alert.textContent = "";
    countElement.textContent = "0 Characters";
}

const currentYearElement = document.querySelector("#currentYear");

const currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;