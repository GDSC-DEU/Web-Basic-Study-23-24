const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  console.log("title was clicked");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here";
  /*console.log("mouse is here");*/
}
function handleMouseLeave() {
  h1.innerText = "mouse is gone";
  /*console.log("leave is here");*/
}
function handleWindowResize() {
  /*화면 크기가 줄어들면 배경화면 색이 변함*/
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  /*복사할 경우 copier 알림창이 나타남*/
  alert("copier");
}
function handleWindowOffline() {
  /*와이파이 꺼지면 알림창*/
  alert("SOS no wifi");
}
function handleWindowOnline() {
  /*와이파이 연결되면 알림창 */
  alert("wifi");
}

h1.addEventListener("click", handleTitleClick);

h1.addEventListener("mouseenter", handleMouseEnter);

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);
