const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const Year = date.getFullYear();
  const Month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Year}-${Month}-${day}\n${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); /*반복해서 실행*/
/*setTimeout(sayHello, 5000); 일정 시간 기다린 후 실행*/

function handleClockClick() {
  clock.classList.toggle("clic");
}

clock.addEventListener("click", handleClockClick);
