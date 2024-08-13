const title = document.querySelector("div.hello:first-child h1");

var color = "black";

function handleTitleColor() {
  if (color == "black") {
    title.style.color = "blue";
    color = "blue";
  } else if (color == "blue") {
    title.style.color = "black";
    color = "black";
  }
}

function handleMouseEnter() {
  if (title.style.color == "black") {
    title.style.color = "yellow";
  } else if (title.style.color == "blue") {
    title.style.color = "green";
  }
}

function handleMouseLeave() {
  if (title.style.color == "yellow") {
    title.style.color = "black";
  } else if (title.style.color == "green") {
    title.style.color = "blue";
  }
}

title.addEventListener("click", handleTitleColor);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
