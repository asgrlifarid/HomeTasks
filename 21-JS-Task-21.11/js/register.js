import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "./helpers.js";
const registerForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#passwordd");
const userNameInput = document.querySelector("#username");

const users = getDataFromLocalStorage("users") || [];

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const bool = users.some(
    (user) =>
      user.userName === userNameInput.value.trim() ||
      user.email === emailInput.value.trim()
  );

  if (!bool) {
    
    const user = {
      id: Date.now(),
      userName: userNameInput.value.trim(),
      email: emailInput.value.trim(),
      isLogged: false,
      password: passwordInput.value.trim(),
      basket:[],
      favorites:[],
    };

    users.push(user);
    setDataToLocalStorage("users", users);
    resetForm();

    Swal.fire({
      icon: "success",
      title: "Great!",
      text: "You have successfully opened a new account!",
      timer: 1500,
    }).then(() => {
      setTimeout(() => {
        window.location.replace("login.html");
      });
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This username or e-mail has already been used!",
      timer: 1500,
    });
  }
});

function resetForm() {
  registerForm.reset();
}
