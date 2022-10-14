let dark = true;
const mode = document.getElementById("darkContact");
const button = document.getElementById("theme");

button.addEventListener("click", () => {
  console.log("wtf");
  if (!dark) {
    dark = true;
    mode.href = "../contact/darkContact.css";
  } else {
    dark = false;
    mode.href = "../contact/lightContact.css";
  }
});
