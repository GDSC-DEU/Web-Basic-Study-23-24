const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String (date.getHours()).padStart(2, "0");
    const minutes = String (date.getMinutes()).padStart(2, "0");
    const seconds = String (date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}: ${minutes} : ${seconds}`;

    //padStart : string이 가져야하는 길이를 2로 설정하고 그렇지 않으면 앞쪽에 0추가
}


getClock();
setInterval(getClock, 1000)
