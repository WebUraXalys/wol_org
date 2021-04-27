const buttonMoreHistory = document.querySelector(".button_history");
const blockMoreHistory = document.querySelectorAll(".more_history");
const buttonHistory = document.querySelectorAll(".button_history");
const buttonHistoryLess = document.querySelectorAll(".button_history_less");
const buttonHistoryMore = document.querySelectorAll(".button_history_more");
const buttonMoreNow = document.querySelector(".more2");
const blockCardMore = document.querySelector(".more_card");
const buttonLess = document.querySelector(".less");
const cards = document.querySelectorAll(".card_itm");
const modalCardBlock = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");


for (let i = 0; i < 4; i++) {
   cards[i].addEventListener("click", function () {
      modalCardBlock[i].classList.toggle("add");
   });  
}


for (let i = 0; i < 4; i++){
   close[i].addEventListener("click", function () {
      modalCardBlock[i].classList.toggle("add");
   });
   
};

buttonMoreHistory.addEventListener("click", moreHistory);

function moreHistory() {
      blockMoreHistory[0].classList.toggle("add");
      buttonMoreHistory.classList.toggle("none");
   }
for (let i = 0; i < 2; i++){
   buttonHistoryMore[i].addEventListener("click", function () {
      blockMoreHistory[i+1].classList.add("add");
      buttonHistoryMore[i].classList.toggle("none");
   });
   
}


 for (let i = 0; i < 3; i++){
   buttonHistoryLess[i].addEventListener("click", function () {
      blockMoreHistory[i].classList.remove("add");
      buttonMoreHistory.classList.toggle("none");
   });
   
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