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

// buttonMoreHistory.addEventListener("click", moreHistory);

// function moreHistory() {
//    blockMoreHistory[0].classList.add("add");
//    buttonMoreHistory.classList.toggle("none");
// }

// buttonHistoryMore.addEventListener("click", moreHistory);

buttonMoreHistory.addEventListener("click", moreHistory);

function moreHistory() {
      blockMoreHistory[0].classList.toggle("add");
      buttonMoreHistory.classList.toggle("none");
   }
for (let i = 0; i < 2; i++){
   buttonHistoryMore[i].addEventListener("click", moreHistory2);
   function moreHistory2() {
      blockMoreHistory[i+1].classList.add("add");
      buttonHistoryMore[i].classList.toggle("none");
      // buttonHistory[i+1].classList.add("none");
   }

}


 for (let i = 0; i < 3; i++){ //Модливо вдасця зробити закриття зразу всіх історій
   buttonHistoryLess[i].addEventListener("click", lessHistory);
   // console.log(i);
   function lessHistory() {
      blockMoreHistory[i].classList.remove("add");
      // console.log(i+"два");
      buttonMoreHistory.classList.toggle("none");
   }
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