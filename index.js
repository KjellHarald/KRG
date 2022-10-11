let drop = true;

const navBtns = document.querySelectorAll(".navBtns");
const mainBtn = document.getElementById("navBarBtn");

mainBtn.addEventListener("click", () => {
  if (drop) {
    navBtns.forEach((b) => {
      b.style.opacity = "0.95";
      b.style.padding = "20px 20px 20px 10px";
      document.getElementById("navBarBtn").textContent = "X";
      drop = false;
    });
  } else {
    navBtns.forEach((b) => {
      b.style.opacity = "0";
      b.style.padding = "0px";
      document.getElementById("navBarBtn").textContent = "|||";
      drop = true;
    });
  }
});

function about() {}
function contact() {}
