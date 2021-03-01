// const likeButton = document.getElementsByClassName("like-button")[0];

// likeButton.addEventListener("click", function (event) {
//   alert("I like it! #like4like #l4l");
// });

function like (likeId){
  likeSpan = document.getElementById(likeId);
  likeSpan.innerHTML = Number(likeSpan.innerHTML) + 1;
};
