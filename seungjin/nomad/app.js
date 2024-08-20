const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const del = document.querySelector("#login-form .del")

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
}

function delItem(){
  localStorage.removeItem('username');
}

loginForm.addEventListener("submit", onLoginSubmit);

del.addEventListener("click",delItem)