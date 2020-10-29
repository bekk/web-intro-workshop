// const likeButton = document.getElementsByClassName("like-button")[0];

// likeButton.addEventListener("click", function (event) {
//   alert("I like it! #like4like #l4l");
// });

let counter = 0;
function like() {
  counter += 1;
  alert("I like it! #like4like #l4l");
  const likeParagraph = document.getElementsByClassName("like-paragraph")[0];
  likeParagraph.innerText = counter + " likes";
}
