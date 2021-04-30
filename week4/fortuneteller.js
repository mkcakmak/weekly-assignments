// // function fortune(numberOfChildren, partnersName, geographicLocation, jobTitle) {
// //     this.numberOfChildren= numberOfChildren;
// //     this.partnersName= partnersName;
// //     this.geographicLocation= geographicLocation;
// //     this.jobTitle= jobTitle;
// //     this.teller= function() {
// //         return `You will be a ${jobTitle} in ${geographicLocation} and married to ${partnersName} with ${numberOfChildren} kids.`
// //     }
// // }

// // let number= prompt("Give a number");
// // let firstName= prompt("Give a name");
// // let city= prompt("Give a city name");
// // let job= prompt("Give one kind of occupation");

// // let newObject = new fortune(number, firstName, city, job)

// // alert(newObject.teller())


let story = ["kids","partnersName", "location", "job"]

let story = new Array();
story[0] = prompt("Give a number")
story[1] = prompt("Give a name")
story[2] = prompt("Give a city")
story[3] = prompt("Give a job title")

alert(`You will be a ${story[3]} in ${story[2]} and married to ${story[1]} with ${story[0]} kids`)











