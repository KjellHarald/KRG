let drop = 0;
let navbarOne = document.getElementById("dropDownOne");
let navbarTwo = document.getElementById("dropDownTwo");

function nav() {
  if (!drop) {
    navbarOne.style.opacity = "1";
    navbarTwo.style.opacity = "1";
    navbarOne.style.padding = "20px";
    navbarTwo.style.padding = "20px";
    drop = 1;
    console.log("wtf");
  } else {
    navbarOne.style.padding = "0px";
    navbarTwo.style.padding = "0px";
    navbarOne.style.opacity = 0;
    navbarTwo.style.opacity = 0;
    drop = 0;
  }
}

function about() {}
function contact() {}
