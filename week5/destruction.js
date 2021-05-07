let fruit = ["apples","pears","banana","grapes","strawberries","watermelons"];
​
let string = "This is a great string I can show my example with, and it is not good English";
​
let words = string.split(" ");
​
const task = {
    task: "do laundry",
    status: "open"
}
task["task"];
task.task; 
​
/**
var Tasks = function(task,status){
    this.task = task;
    this.status = status;
}
 */
class Tasks {
    constructor(task,status){
        this.task = task;
        this.status = status;
    }
}
​
let task1 = new Tasks("go shopping","open");
let task2 = new Tasks("do homework","open");
​
for(let todo in task){
    console.log(todo +": "+ task[todo]);
}
​
Object.values(task).forEach((property_value, index) => {
    let keys = Object.keys(task);
    console.log(keys[index] + ": " + property_value);
});
​
Object.keys(task).forEach(todo => {
    console.log(todo +": "+ task[todo]);
});
​
for(let todo of Object.keys(task)){
    console.log(todo +": "+ task[todo]);
}
​
for(let word of words){
    console.log(word);
}
​
console.log(string.length);
​
string.forEach(ch => {
    console.log(ch);
});
​
fruit.forEach(el => {
    console.log(el);
});
​
for(let el of fruit){
    console.log(el);
}
​
​
/**
 * apples
 * pears
 * banana
 * grapes
 * strawberries
 * watermelons
 */
​
const firstName = "first name";
​
 const Person = {
    [firstName]: "Susanne",
    age: 38,
    experience: 13
  };
​
  console.log(Object.keys(Person));
  
  /** the way we know 
  const personName = Person.name;
  let personAge = Person.age;
  let personExperience = Person.experience;
  */
  /** destructured */
  const { name } = Person;
  let { age, experience } = Person;