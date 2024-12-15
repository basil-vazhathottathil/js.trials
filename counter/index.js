const decreaseBttn= document.getElementById("decrease");
const resetBttn= document.getElementById("reset");
const increaseBttn= document.getElementById("increase");
const countLabel= document.getElementById("countLabel");

let count=0;

increaseBttn.onclick= function(){
    count++;
    countLabel.textContent=count;
}

resetBttn.onclick=function(){
    count=0;
    countLabel.textContent= count;
}

decreaseBttn.onclick= function(){
    count--;
    countLabel.textContent= count;
}