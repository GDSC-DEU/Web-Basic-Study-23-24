const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

const loginInput = document.querySelector("#login-form input");

const loginButton = document.querySelector("#login-form button");

function BtnClick() {
  const username = loginInput.value;
  console.log(username);
}
loginButton.addEventListener("click", BtnClick);
