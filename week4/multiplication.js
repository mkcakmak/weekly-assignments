let i = prompt("Write number for multiple between 0-10")
if (i<=10 && i>=0) {
    i=i*9
    alert(i)
}
else if(i>10 || i<0) {
    alert("Write between 0-10")
}



//Table 2.0
let i=0;
    while(i<10) {
        console.log(i +"*" +"9" +"=" +i*9)
        i=i+1
    }

// for version Table 2.0

for(let i=0; i<11; i++) {
    console.log(i +"*" +"9" +"=" +i*9)
}
