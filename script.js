const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const firstCheckBox = document.getElementById("first-dot");
const secondCheckBox = document.getElementById("second-dot");
const box = document.querySelector(".box");

function submitForm(e) {
  e.preventDefault();

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    alert("Please fill in all feilds!");
  } else {
    alert("Your form is submited");
    form.submit();
  }
}
function checked(e) {
  if (e.target.classList.contains("dot")) {
    e.target.classList.remove("dot");
    e.target.classList.add("checked");
  } else {
    e.target.classList.remove("checked");
    e.target.classList.add("dot");
  }
}

function chekingBox(e) {
  if (e.target.classList.contains("box")) {
    e.target.classList.remove("box");
    e.target.classList.add("box-checked");
  } else {
    e.target.classList.remove("box-checked");
    e.target.classList.add("box");
  }
}

form.addEventListener("submit", submitForm);
firstCheckBox.addEventListener("click", checked);
secondCheckBox.addEventListener("click", checked);
box.addEventListener("click", chekingBox);
