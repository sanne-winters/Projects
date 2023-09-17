// Get references to HTML elements
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            <button class="complete-button" onclick="completeTask(this)">Completed!</button>
            <button class="up-button" onclick="moveTaskUp(this)">Up</button>
            <button class="down-button" onclick="moveTaskDown(this)">Down</button>
        `;

        // Add the task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
        
    }
    
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

// Function to mark a task as complete
function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}

// Function to move a task up in the list
function moveTaskUp(button) {
    const taskItem = button.parentElement;
    const previousTaskItem = taskItem.previousElementSibling;
    
    if (previousTaskItem) {
        taskList.insertBefore(taskItem, previousTaskItem);
    }
}
// Function to move a task down in the list
function moveTaskDown(button) {
    const taskItem = button.parentElement;
    const nextTaskItem = taskItem.nextElementSibling;
    
    if (nextTaskItem) {
        taskList.insertBefore(nextTaskItem, taskItem);
    }
}
// Event listener for the "Enter" key
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});