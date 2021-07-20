// DOM

const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

console.log('btnRules', btnRules);
console.log('btnClose', btnClose);
console.log('modalRules', modalRules);
//SHOW/HIDE RULES

btnRules.addEventListener("click", () => {
    modalRules.classList.toggle('display-none');
})
btnClose.addEventListener("click", () => {
    modalRules.classList.toggle('show-modal');
})