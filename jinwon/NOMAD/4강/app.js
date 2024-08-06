const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

/*
const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
*/
const loginInput = document.querySelector("#login-form input");
/*
const loginButton = loginForm.querySelector("button");
*/
const loginButton = document.querySelector("#login-form button");

function BtnClick() {
  console.dir(loginInput.value);
}
loginButton.addEventListener("click", BtnClick);
