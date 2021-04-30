

// Loop version

let i=0;

while(i<20) {
  console.log("The number is " +i)
    if(i%2===0) {
        console.log("The number is even")
    }
    else if(i%2===1) {
        console.log("The number is odd")
    }
  i=i+1    
}

// for version

let i;
for(/* let i */i=0;i<=20;i++) {
  console.log("The number is " +i);
    if(i%2===0) {
        console.log("The number is even")
    }
    else if(i%2===1) {
        console.log("The number is odd")
    }

}

//prompt version

let i = prompt("Write number")
      if(i>20 || i<0)
        console.log("Write number between 0-20")
      else if(i%2===0) {
          console.log(i+ " is even")
      }
      else {
          console.log(i+ " is odd")
      }
  
