let day = prompt("Which day?");


if (day === "Monday") {
  console.log("Montag");
} else if (day === "Tuesday") {
  console.log("Dienstag");
} else if (day === "Wednesday") {
  console.log("Mittwoch");
} else if (day === "Thursday") {
  console.log("Donnerstag");
} else if (day === "Friday") {
  console.log("Freitag");
} else if (day === "Saturday") {
  console.log("Samstag");
} else if (day === "Sunday") {
  console.log("Sontag");
}

// Switch 

let day = prompt("Which day do you want to translate?");


switch (day) {
case "Monday" :
  console.log("Montag") 
break;
case "Tuesday" :
  console.log("Dienstag")
break;
case "Wednesday" :
  console.log("Mittwoch")
break;
case "Thursday" :
  console.log("Donnerstag")
break;
case "Friday" :
  console.log("Freitag")
break;
case "Saturday" :
  console.log("Samstag")
break;
case "Sunday" :
  console.log("Sontag")

default:
  console.log("Input error")
}



