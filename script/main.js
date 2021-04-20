const buttonMoreHistory = document.querySelector(".button_history");
const blockMoreHistory = document.querySelector(".more_history");
const buttonMoreNow = document.querySelector(".more2");
const buttonLess = document.querySelector(".less");
const blockCardMore = document.querySelector(".more_card");
const cards = document.querySelectorAll(".card_itm");
const modalCardBlock = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");

console.log(cards);
// buttonMoreNow.addEventListener('click', function () {
//    blockCardMore.classList.toggle('add')
// })

// cards[0].addEventListener("click", modalCard);

// function modalCard() {
//    modalCardBlock.classList.toggle("add");
// }

// Пробую написати цикл щоб працювиля всі карточки

// for (let i = 0; i < 3; i++) { 
//    alert(i);
// }
for (let i = 0; i < 4; i++) {
   cards[i].addEventListener("click", modalCard);

   function modalCard() {
      modalCardBlock[i].classList.toggle("add");
   }  
}
for (let i = 0; i < 4; i++){
   close[i].addEventListener("click", closef);
   function closef() {
      modalCardBlock[i].classList.toggle("add");
   }
}

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