const firstName = document.querySelectorAll(".firstName");
const lastName = document.querySelectorAll(".lastName");
const email = document.querySelectorAll('.email');
const password = document.querySelectorAll('.password');
const submit = document.querySelector('.submit');
const errorIcon = document.querySelectorAll('.error-icon')
const errorMessage = document.querySelectorAll(".error-message");
const inputGroups = document.querySelectorAll('.input-group input')

submit.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage.forEach(function (msg) {
    msg.style.display = "block";
  });
  firstName.forEach(function (input) {
    input.classList.add("input-with-error");
  });
  lastName.forEach(function (input) {
    input.classList.add("input-with-error");
  });

  email.forEach(function (input) {
    input.classList.add("input-with-error");
  });

  password.forEach(function (input) {
    input.classList.add("input-with-error");
  });
});
