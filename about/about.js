let dark = true;
const mode = document.getElementById("darkAbout");
const button = document.getElementById("theme");

button.addEventListener("click", () => {
  if (!dark) {
    dark = true;
    mode.href = "../about/darkAbout.css";
  } else {
    dark = false;
    mode.href = "../about/lightAbout.css";
  }
});
