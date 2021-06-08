// Array.from(document.body.getElementsByClassName("description")).forEach(
//   (item) => {
//     item.addEventListener("click", () => {
//       item.classList.toggle("description--closed");
//     });
//   }
// );

// const desc = document.getElementById("description-1");
// desc.addEventListener("click", () => {
//   desc.classList.toggle("description--open");
// });

const desc = document.getElementById("description-1");
const tooLong = desc.innerText.length > 60;
if (tooLong) {
  desc.addEventListener("click", () => {
    desc.classList.toggle("description--closed");
  });
}
