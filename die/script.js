function roll(){
    const numberOfDice= document.getElementById("numberOfDice").value;
    const diceResult= document.getElementById("diceRes");
    const diceImages= document.getElementById("diceImages");
    const values=[];
    const images=[];


    for(let i=0;i<numberOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="die\ images\ ${values}.png " alt="dice:${value}>`);
    }

    diceResult.textContent=`dice = ${values.join(`, `)}`;
    diceImages.innerHTML = images.join('');
}