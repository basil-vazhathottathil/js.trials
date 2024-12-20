const textBox= document.getElementById("textbox");
const cel_fah =document.getElementById("toFarhein");
const fah_cel = document.getElementById("toCelsius");
const result= document.getElementById("result");

let temp;


function convert(){
    if(toFarhein.checked){
        temp= Number(textBox.value);
        temp= temp*9/5 + 32;
        result.textContent= temp.toFixed() +"°F";
    }
    else if(toCelsius.checked){
        temp=Number(textBox.value);
        temp= 5/9(temp-32);
        result.textContent= temp.toFixed() + "°C";
    }
    else{
        result.textContent="select a unit";
    }
}