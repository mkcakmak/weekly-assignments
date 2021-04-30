/** Find the greatest common divisor of 2 positive integers */
/*
inputs
=======
2 positive numbers
output
=======
GCD as number
constraints
===========
- numbers, only positive 
- two different numbers 
- no decimals 
test cases
==========
no1 = 3
no2 = 4
GCD = 1
///////////////
no1 = 16
no2 = 18 % 16 = 2
no1 = 2
no2 = 16 % 2 = 0
GCD = 2
///////////////
no1 = 7
no2 = 11
7 % 11 = 7
no1 = 11
no2 = 7
11 % 7 = 4
no1 = 7
no2 = 4
7 % 4 = 3
no1 = 4
no2 = 3
4 % 3 = 1
no1 = 3
no2 = 1
3 % 1 = 0
GCD = 1
***********
Pseudo Code
***********
BEGIN GCD
    INITIALIZE no1 as number
    INITIALIZE no2 as number
    INITIALIZE gcd as number 
    INITIALIZE remainder as number
    no1 = PROMPT for "Please give me a positive integer"
    no2 = PROMPT for "Please give me another positive integer"
    check if no1 and no2 are positive (> 0) and not decimal and no1 != no2 
        if false: 
            no1 = PROMPT for "Please give me a positive integer"
            no2 = PROMPT for "Please give me another positive integer"
        if true:
            BEGIN LOOP until remainder = 0
            remainder = no1 % no2 
                IF remainder === 0
                    RETURN gcd = no2
                ELSE
                    no1 = no2
                    no2 = remainder 
            END LOOP
    PRINT "The greatest common divisor between no1 and no2 is gcd"
END

*/

// /** initialize = declare variables */
// let no1;
// let no2;
// let gcd;
// let remainder = 0;
// let msg = "";
// /** assigning values + validate them */
// do {
//     no1 = parseInt(prompt("Please input a positive integer"));
// } while(no1<=0 || isNaN(no1));
// do {
//     no2 = parseInt(prompt("Please input another positive integer. Please make sure it is not the same as your first"));
// } while(no2<=0 || no1 === no2 || isNaN(no2));
// /** at this stage we know that both numbers are positive integers // remainder === no1 */
// msg = `The greatest common divisor between ${no1} and ${no2} is `;
// do {
//     remainder = no1 % no2;
//     if(remainder === 0){
//         gcd = no2;
//     } else {
//         no1 = no2;
//         no2 = remainder;
//     }
// } while(remainder>0);
// alert(msg + gcd);


let number1 = prompt("Give a number")

while(number1<0 ) {
    alert("Give a positive number")
    prompt("Give a number")
}

let number2 = prompt("Give a second number")

while(number2<0 ) {
    alert("Give a positive number")
    prompt("Give a number")
}


