const buttonMoreHistory = document.querySelector(".button_history");
const blockMoreHistory = document.querySelector(".more_history");
const buttonMoreNow = document.querySelector(".more");
const blockCardMore = document.querySelector(".more_card");

// buttonMoreNow.addEventListener('click', function () {
//    blockCardMore.classList.toggle('add')
// })
buttonMoreHistory.addEventListener("click", moreHistory);

function moreHistory() {
   blockMoreHistory.classList.toggle("add");
   buttonMoreHistory.classList.toggle("none");
}

buttonMoreNow.addEventListener("click", toggleModal);

function toggleModal() {
   blockCardMore.classList.toggle("add");
}