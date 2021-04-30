/*
let yourAge =prompt("How old are you?")
while(yourAge<1 || yourAge>150) {
    alert("Your age should be between 0-150")
    yourAge=prompt("Enter right age")
}

let retirementAge= prompt("In which age do you want to retire?")
while(retirementAge<=yourAge) {
    alert("Retirement age should be bigger than your age")
    retirementAge=prompt("Enter right age")
}

let years= (retirementAge)-(yourAge)
let date =  new Date().getFullYear();
let futureYear= date + years ;


alert("You have " +years +" years left until you can retire")
alert("It's " +date+" so you can retire " +futureYear)

*/

let date =  new Date().getFullYear();
let yourAge =prompt("How old are you?");

while(yourAge<1 || yourAge>150) {
    alert("Your age should be between 0-150")
    yourAge=prompt("Enter right age")
}

let retirementAge= prompt("In which age do you want to retire?");

while(retirementAge<=yourAge) {
    alert("Retirement age should be bigger than your age")
    retirementAge=prompt("Enter right age")
}

function calculator(now, future) {
    let year=future-now
    let later=date+year

    return `You have ${year} years left until you can retire.` + ` It's ${date} so you can retire ${later}`    
}

alert(calculator(yourAge, retirementAge));