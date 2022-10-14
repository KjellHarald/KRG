// getting all collapse class from dome into an array
const collapse = document.getElementsByClassName("planet");
/* colapse function */
/* First forloop is collecting, and indexing all elements with the collapse class. This is how it can identify which of the element that got triggered*/
/* Second line is listening for "click" events on each element in the collapse array  */
/* Third line is variable that is putting all the children in an array of the invoked element. */
/* Secondary forloop is to indentify each the childrens in the new array */
/* If else statement manipulate inline css of all targets in secondary forloop*/


for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function (E) {
    let collapseContent = this.children;
    for (let i2 = 0; i2 < collapseContent.length; i2++) {
      if (collapseContent[i2].style.visibility === "visible") {
        this.style.minHeight = "400px";
        this.style.maxHeight = "400px";
        this.style.transition = "0.5s linear";
        collapseContent[i2].style.visibility = "hidden";
        collapseContent[i2].style.transition = "0.5s linear";
        collapseContent[i2].style.opacity = "0%";
      } else {
        this.style.minHeight = "600px";
        this.style.maxHeight = "600px";
        this.style.transition = "0.5s linear";
        collapseContent[i2].style.visibility = "visible";
        collapseContent[i2].style.opacity = "100%";
        collapseContent[i2].style.transition = "0.5s linear";
      }
    }
  });
}
