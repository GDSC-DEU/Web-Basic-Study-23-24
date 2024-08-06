const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /*const clickedClass = "clicked"; string을 반복하는 순간 const 사용
  
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }*/
  h1.classList.toggle("clicked");
  /*toggle: h1의 classList에 clicked class 가 이미 있는지 확인해서
  만약 있다면 clicked를 제거해줌*/
}

h1.addEventListener("click", handleTitleClick);
