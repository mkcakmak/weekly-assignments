
let taskList = [];
​
class Task {
    constructor(todo,status="open"){
        this.todo = todo;
        this.status = status;
    }
​
    addTask(){
        let todo = prompt("Please enter what to do");   
        if(todo!==null){
            if(todo.length===0) {
                return "error";
            } else {
                if(!this.isDuplicate(todo)){
                    taskList.push(new Task(todo));
                }
                else {
                    this.addTask();
                }
            }
        }
    }
​
    updateTask(){
​
    }
​
    deleteTask(){
​
    }
​
    displayTasks(){
​
    }
​
    isDuplicate(tsk){
        //check for duplicates
        for(let el of taskList){
            for(let elm of Object.values(el)){
                if(tsk === elm){
                    return true;
                }
            }
        }
        return false;
    }
}


//     updateTask(){
// ​        let edit= prompt("If you want to change something in your task write edit ");
        
//         if (edit=== "edit") {
//             return this.todo = prompt("Edit your task")
//         }
//     }
//     deleteTask(){
// ​        let done= prompt("If you finish your task just write ok");
//         if(done=== "ok"){
//             return this.status="closed"
// }
//     }
//     displayTasks(){
//         let display= prompt("If you want to show your current task status write display ")
// ​       
//         if (display=== "display") {
//              console.table(taskList)
//         }
//     }
// }


let task = new Task();
task.addTask();


/** HOW CAN I SELECT MY  EACH TODO ITEM */

/** ToDo list */
​
/** objects = storing data
 * tasks: something to do, status, maybe more later
 */
​
/** actions = functions = manipulate data 
 * create / add new task
 * edit exiting task: update value per property
 * delete existing task
 * 
 * constraints: 
 * check if todo-string is not empty
 * default value of status = open
 * check for duplicates
*/














