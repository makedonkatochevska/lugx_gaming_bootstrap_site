//NAV BAR SCROLLED
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    nav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 80) {
    nav.classList.remove("navbar-scrolled");
  }
});

//FORM VALIDATION
const form = document.getElementById("form");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

//error message const
const nameError = document.getElementById("name-error");
const surnameError = document.getElementById("surname-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", (e) => {
  //name validation
  if (name.value === "" || name.value == null) {
    e.preventDefault();
    nameError.innerHTML = "Name is required";
  } else {
    nameError.innerHTML = "";
  }

  //surname validation
  if (surname.value === "" || surname.value == null) {
    e.preventDefault();
    surnameError.innerHTML = "Surname is required";
  } else {
    surnameError.innerHTML = "";
  }

  //email validation
  if (email.value === "" || email.value == null || !email.value.includes("@")) {
    e.preventDefault();
    if (email.value === "" || email.value == null) {
      emailError.innerHTML = "Email is required";
    } else {
      emailError.innerHTML = "Valid email is required";
    }
  } else {
    emailError.innerHTML = "";
  }

  //subject validation
  if (subject.value === "" || subject.value == null) {
    e.preventDefault();
    subjectError.innerHTML = "Subject is required";
  } else {
    subjectError.innerHTML = "";
  }

  //message validation
  if (
    message.value === "" ||
    message.value == null ||
    message.value.length < 10
  ) {
    e.preventDefault();

    if (message.value === "" || message.value == null) {
      messageError.innerHTML = "Message is required";
    } else {
      messageError.innerHTML = "Message must be at least 10 characters";
    }
  } else {
    messageError.innerHTML = "";
  }
});
