let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const successInptut = document.querySelector("success");
const errorNodes = document.querySelectorAll(".error");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

function validateForm() {
  clearMessages();
  let errorFlag = false;
  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (numberInput.value.length < 1) {
    errorNodes[2].innerText = "Please Enter your Phone Number";
    numberInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Success!";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  numberInput.classList.remove("error-border");
}
function emailIsValid(email) {
  let pattern = /^\S+@\S+\.\S+$/;
  return pattern.test(email);
}
