const smallimg = document.querySelectorAll(".img > a");
// console.log(smallimg);
const imgactive = document.querySelectorAll(".img");
let imgid = 1;

smallimg.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgid = img.dataset.id;
    // console.log(imgid);

    //border
    imgactive.forEach((imgs) => {
      imgs.classList.remove("active");
    });
    img.parentElement.classList.add("active");

    //call
    moveimg();
  });
});

function moveimg() {
  const imgwidth = document.querySelector(
    ".bigimg img:first-child"
  ).clientWidth;
  //   console.log(imgwidth);
  //   did mistake in querySelectorAll

  let width = (imgid - 1) * imgwidth;
  const imgframe = document.querySelector(".bigimg");
  imgframe.style.transform = `translateX(${-width}px)`;
}
