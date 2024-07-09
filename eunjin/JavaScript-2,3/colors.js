function SetLinkColor(color) {
  var alist = document.querySelectorAll("a");
  var size = 0;
  while (size < alist.length) {
    alist[size].style.color = color;
    size = size + 1;
  }
}
function SetBodyColor(color) {
  document.querySelector("body").style.color = color;
}
function SetBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}
function nightDayHandler(self) {
  if (self.value === "night") {
    self.value = "day";
    SetBackgroundColor("black");
    SetBodyColor("white");

    SetLinkColor("yellow");
  } else {
    self.value = "night";
    SetBackgroundColor("white");
    SetBodyColor("black");

    SetLinkColor("green");
  }
}
