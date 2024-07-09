var Link = {
  SetColor: function (color) {
    // var links = document.querySelectorAll("a");
    // var i = 0;
    // while (i < links.length) {
    //   links[i].style.color = color;
    //   i = i + 1;
    // }
    $("a").css("color", color);
  },
};
//객체는 property와 property 를 구분할 때 ,를 사용함
var Body = {
  SetColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  SetBackColor: function (color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};
function changes(self) {
  var target = document.querySelector("body");
  if (self.value === "빨강색") {
    Body.SetBackColor("red");
    Body.SetColor("black");
    self.value = "주황색";
    Link.SetColor("gold");
  } else if (self.value === "주황색") {
    Body.SetBackColor("orange");
    Body.SetColor("black");
    self.value = "노랑색";
    Link.SetColor("indigo");
  } else if (self.value === "노랑색") {
    Body.SetBackColor("yellow");
    Body.SetColor("black");
    self.value = "초록색";
    Link.SetColor("blue");
  } else if (self.value === "초록색") {
    Body.SetBackColor("green");
    Body.SetColor("black");
    self.value = "파랑색";
    Link.SetColor("silver");
  } else if (self.value === "파랑색") {
    Body.SetBackColor("blue");
    Body.SetColor("black");
    self.value = "남색";
    Link.SetColor("yellow");
  } else if (self.value === "남색") {
    Body.SetBackColor("indigo");
    Body.SetColor("black");
    self.value = "보라색";
    Link.SetColor("orange");
  } else if (self.value === "보라색") {
    Body.SetBackColor("purple");
    Body.SetColor("black");
    self.value = "빨강색";
    Link.SetColor("black");
  }
}
function reset(self) {
  var target = document.querySelector("body");
  Body.SetBackColor("white");
  Body.SetColor("black");
  Link.SetColor("black");
}
