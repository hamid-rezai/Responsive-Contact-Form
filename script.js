const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const radioOption1 = document.getElementById("radio1");
const radioOption2 = document.getElementById("radio2");
const consent = document.getElementById("cbx-46");
const submitBtn = document.getElementById("submit-btn");

function submitForm(e) {
  e.preventDefault();

  // Validation
  if (!firstNameRegex.test(firstName.value)) { 
    firstName.classList.add("error-border"); 
    document.getElementById("first-name-error").style.display = "block";
    isValid = false;
  }
  if (!lastNameRegex.test(lastName.value)) {
    lastName.classList.add("error-border");
    document.getElementById("last-name-error").style.display = "block";
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    email.classList.add("error-border");
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }
  if (message.value === "") {
    message.classList.add("error-border");
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  }
  if (!radioOption1.checked && !radioOption2.checked) {
    document.getElementById("radio-error").style.display = "block";
    isValid = false;
  }
  if (!consent.checked) {
    document.getElementById("consent-error").style.display = "block";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    document.getElementById("scard").style.display = "block";
  }

  return isValid;

}

// regex experessions
const firstNameRegex = /^[A-Za-z\s]+$/;
const lastNameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var isValid = true;

// Clear previous error status
firstName.classList.remove("error-border");
lastName.classList.remove("error-border");
email.classList.remove("error-border");
message.classList.remove("error-border");
document.getElementById("first-name-error").style.display = "none";
document.getElementById("last-name-error").style.display = "none";
document.getElementById("email-error").style.display = "none";
document.getElementById("message-error").style.display = "none";
document.getElementById("radio-error").style.display = "none";
document.getElementById("consent-error").style.display = "none";


form.addEventListener("submit", submitForm);
