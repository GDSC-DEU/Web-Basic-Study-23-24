const clock = document.querySelector("h2#clock");

function getClock() {
    const nowDate = new Date();
    const nowHours = String(nowDate.getUTCHours()).padStart(2,"0");
    const nowMinutes = String(nowDate.getUTCMinutes()).padStart(2,"0");
    const nowSeconds = String(nowDate.getUTCSeconds()).padStart(2, "0");
    const timeString = `${nowHours}:${nowMinutes}:${nowSeconds}`; 
    clock.innerText = timeString;
}

getClock()
setInterval(getClock,1000);