const buttonMoreHistory = document.querySelector(".button_history");
const blockMoreHistory = document.querySelector(".more_history");
const buttonMoreNow = document.querySelector(".more2");
const buttonLess = document.querySelector(".less");
const blockCardMore = document.querySelector(".more_card");

// buttonMoreNow.addEventListener('click', function () {
//    blockCardMore.classList.toggle('add')
// })
buttonMoreHistory.addEventListener("click", moreHistory);

function moreHistory() {
   blockMoreHistory.classList.toggle("add");
   buttonMoreHistory.classList.toggle("none");
}

buttonMoreNow.addEventListener("click", addCard);

function addCard() {
   blockCardMore.classList.toggle("add");
   buttonMoreNow.classList.toggle("none");
   buttonLess.classList.toggle("add");
}

buttonLess.addEventListener("click", lessCard);

function lessCard() {
   blockCardMore.classList.toggle("add");
   buttonMoreNow.classList.toggle("none");
   buttonLess.classList.toggle("add");
}