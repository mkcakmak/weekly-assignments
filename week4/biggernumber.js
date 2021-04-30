/*
let numberFirst = prompt("Give a number")
let numberSecond = prompt("Give a second number")

if(numberFirst<numberSecond) {
    alert(`${numberFirst} is smaller than ${numberSecond}`)
}
else if(numberFirst>numberSecond) {
    alert(`${numberFirst} is bigger than ${numberSecond}`)
}

*/

let numberFirst = prompt("Give a number")
let numberSecond = prompt("Give a second number")

function smallerBigger(number1, number2) {
    let biggerNumber;
    
    if(number1<number2) 
      biggerNumber=number2
    else if(number1>number2)
      biggerNumber=number1

    return "The greater number of " + number1 + " and " + number2 +" is " + biggerNumber
  
 
}
alert(smallerBigger(numberFirst, numberSecond))
