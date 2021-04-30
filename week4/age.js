/*
let birthdayYear = prompt('When were you born?');
let futureYear = prompt('The year you want to calculate');

let result = futureYear-birthdayYear;
//alert(`You will be ${result}`);

alert("You will be " + result);
*/

let birthdayYear = prompt('When were you born?');
let futureYear = prompt('The year you want to calculate');

function year(firstyear, secondyear) {
    return secondyear - firstyear   
}

alert("You will be " + year(birthdayYear, futureYear) + " years old")