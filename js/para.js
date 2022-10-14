let bilder = document.querySelectorAll(".planet");
let idEl = "";
let imgDivs = [];

bilder.forEach((e) => {
  const imgEl = e.id;
  imgDivs.push(imgEl);

  const thisImgEl = document.getElementById(imgEl);
  thisImgEl.addEventListener("click", () => {
    if (thisImgEl.style.minHeight !== "400px") {
      thisImgEl.style.minHeight = "400px";
      console.log('close')
    } else {
      thisImgEl.style.transition = "3s";
      thisImgEl.style.minHeight = "800px";
      console.log('open');
      idEl = thisImgEl.id;
      closeDivs();
    }
  });
});

const closeDivs = () => {
  imgDivs.forEach((e) => {
    if (e !== idEl) {
      const closeDiv = document.getElementById(e);
      if (closeDiv.style.minHeight != "400px") {
        closeDiv.style.minHeight = "400px";
        console.log('close')
      }
    }
  });
};