const taskInput = document.getElementById('taskInput');
// line above is used to retrieve the input from the html element

const addTaskBtn = document.getElementById('addTaskBtn');
// line above fetches button elements responsible for adding task

const taskList = document.getElementById('taskList');
// line above gets the unordered list elements where tasks are displayed

const clearCompleteBtn = document.getElementById('clearCompleteBtn');
// accesses the button used to clear completed tasks

const clearAllBtn = document.getElementById('clearAllBtn');



let tasks = [];

function addTask(){
    try {
        debugger;
    const taskText = taskInput.value.trim();//.trim() trimming any trailing white spaces
    //line above will retrieve the value entered into the taskinput HTML element bu the user 
    
    // if statemennt checks to make sure the task text is not an empty string
    if (taskText !== "") {

        // adding new task using the push array method
        tasks.push({ text: taskText});
        
        // resets value to an empty string
        taskInput.value = "";

        // calls the display task function made further down 
        displayTasks();
        console.log('passed if statement');
    }} catch(error) {
        console.log('fix the log and check this', error);
    }

}

function clearAll(){
    debugger;
    let tasks = [];

    clearTasks();
}

function displayTasks(){
    taskList.innerHTML = ""; //used to clear existing content within the taskList element

    //forEach will iterate through each line and creatre a list item
    tasks.forEach((tasks, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="tasks-${index}" ${tasks.completed ? "checked" : ""}>
        <label for="tasks-${index}">${tasks.text}</label>`;

        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(tasks => !tasks.completed);
    displayTasks();
}

function clearTasks(){
    taskList.innerHTML = "";

}

addTaskBtn.addEventListener("click", addTask);

clearCompletedBtn.addEventListener("click", clearCompletedTasks);

clearAllBtn.addEventListener("click", clearAll);

displayTasks();