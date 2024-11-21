import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "./helpers.js";

const loginForm = document.querySelector("form");
const emailOrUsernameInput = document.querySelector("#usernameOremail");
const passwordInput = document.querySelector("#passwordd");

const users = getDataFromLocalStorage("users") || [];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const password = passwordInput.value.trim();
  const emailOrUsername = emailOrUsernameInput.value.trim();

  const foundUser = users.find(
    (user) =>
      user.password === password &&
      (user.userName === emailOrUsername || user.email === emailOrUsername)
  );

  if (foundUser) {
    foundUser.isLogged = true;
    setDataToLocalStorage("users", users);
    window.location.replace("index.html");
    console.log(foundUser);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Did you something wrong?",
      timer: 1500,
    });
  }
});

function resetForm() {
  loginForm.reset();
}
