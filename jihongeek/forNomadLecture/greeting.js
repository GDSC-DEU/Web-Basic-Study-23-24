const mainText = document.querySelector(".main-text");
const greeting = document.querySelector("#greeting");
function mainTextClickHandler() {
    if (mainText.className !== "main-text tomato")
    {
        mainText.className = "main-text tomato"    
    }
    else {
        mainText.className = "main-text apple"    
    }        
}
mainText.addEventListener("click",mainTextClickHandler);

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"
const savedUsername = localStorage.getItem(USERNAME_KEY);
function onSumbit(e) {
    e.preventDefault();
    const username = loginInput.value; 
    const regexPattern = /^[가-힣]+$/;
    if (regexPattern.test(username) === false) {
        alert("죄송합니다만, 이름은 한글 문자만 가능합니다.");
        return;
    }    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `안녕하세요! ${username}님`;
    localStorage.setItem(USERNAME_KEY,username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.classList.remove("hidden");
loginForm.addEventListener("submit",onSumbit);
if (savedUsername !== null)
{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `안녕하세요! ${savedUsername}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}