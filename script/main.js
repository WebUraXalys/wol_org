const buttonMoreNow = document.querySelector(".more");
const blockCardMore = document.querySelector(".more_card");

// buttonMoreNow.addEventListener('click', function () {
//    blockCardMore.classList.toggle('add')
// })

buttonMoreNow.addEventListener("click", toggleModal);

function toggleModal() {
   blockCardMore.classList.toggle("add");
}