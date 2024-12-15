const button= document.getElementById("button");
const label = document.getElementById("label");
const min=1;
const max=6;

let randomNum1 ,randomNum2 , randomNum3;

button.onclick = function () {
    randomNum1 = Math.floor(Math.random()*max)+ min;
    label1.textContent= `the number generated is ${randomNum1}`;

    randomNum2 = Math.floor(Math.random()*max)+ min;
    label2.textContent= `the number generated is ${randomNum2}`;

    randomNum3 = Math.floor(Math.random()*max)+ min;
    label3.textContent= `the number generated is ${randomNum3}`;
}