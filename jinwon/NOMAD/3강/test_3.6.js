const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor==="blue"){
  newColor = "tomato";
  }
  else{
  newColor = "blue";
  }
  h1.style.color = newColor;
*/

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
