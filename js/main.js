const countBtn = document.querySelector(".count__btn");
const resetBtn = document.querySelector(".reset__btn");
const saveBtn = document.querySelector(".save__btn");
const countArea = document.querySelector(".count__area");
const savedNumber = document.querySelector(".saved__number");
// for the count button
let count = 0;

countBtn.addEventListener("click", (e) => {
    countArea.innerText = ++count;
})

saveBtn.addEventListener("click", (e) => {
    let saveFormat = count + " - ";
   savedNumber.textContent += saveFormat;

    countArea.innerText = 0;
    count = 0;
})

resetBtn.addEventListener("click", (e) => {
    savedNumber.innerText = "";
    countArea.innerText = 0;
    count = 0;
    
})