const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

if (loginButton) {
  loginButton.addEventListener("click", onLoginBtnClick);
} else {
  console.error("loginButton이 존재하지 않습니다.");
}
