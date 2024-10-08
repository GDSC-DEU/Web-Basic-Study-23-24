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

function onSumbit(e) {
    e.preventDefault();
    const username = loginInput.value; 
    const regexPattern = /^[가-힣]+$/;
    if (regexPattern.test(username) === false) {
        alert("죄송합니다만, 이름은 한글 문자만 가능합니다.");
        return;
    }    
    loginForm.classList.add("hidden");
    greeting.innerText = `안녕하세요! ${username}님`;
    localStorage.setItem("username",username);
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",onSumbit);
