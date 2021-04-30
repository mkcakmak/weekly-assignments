// TipCalculator
//     Initialize billAmount to 0
//     Initialize tip to 0
//     Initialize tipRate to 0
//     Initialize total to 0

//     Prompt for billAmount with "What is the bill amount?"
//     Prompt for tipRate with "What is the tip rate?" 


/*
let billAmount= 0;
let tip = 0;
let tipRate = 0;
let total = 0;

do{
billAmount = parseFloat(prompt('What is the bill amount?'));
}while(isNaN(billAmount)||billAmount<0)

do{
tipRate = parseFloat(prompt('What is the tip rate?'));
}while(isNaN(tipRate)||tipRate<0)

alert(`Bill Amount is : CHF ${billAmount}`);
alert(`Tip Rate is : ${tipRate}`);

tip = billAmount * (tipRate / 100);
tip = parseFloat(tip.toFixed(2));

alert (`Tip: CHF ${tip}`);
total = billAmount+tip;
alert (`Total: CHF ${total}`);

*/

let bill= parseInt(prompt("How much is the bill?"))
let tip= parseInt(prompt("Give a tip rate %?"))

function calculateTip(price, rate) {
    let rateAmount = price*rate/100
    let newPrice= rateAmount+price
    return `Tip: ${rateAmount} and Total: ${newPrice}`
}

alert(calculateTip(bill, tip))


