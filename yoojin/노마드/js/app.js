const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
