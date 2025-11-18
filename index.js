let addTaskButton = document.getElementById("add-task-btn");
let taskContainer = document.getElementById('task-container');
let taskMessage = document.getElementById('task-message');
let taskCount = 1;

function heading() {
    let totalTasks = taskContainer.querySelectorAll(".task-list-card:not(#task-list-0)").length;

    if (totalTasks >= 1) {
        document.querySelector('.heading').innerHTML = "Tasks to do...";
    }
    else{
        document.querySelector('.heading').innerHTML = "";
    }
}

addTaskButton.addEventListener('click', function (event) {
    event.preventDefault();

    let text = taskMessage.value.trim();

    // If input is empty — do nothing
    if (text === "") {
        alert("Please write a task!");
        return;
    }

    let taskTemplate = document.getElementById("task-list-0");

    // Clone hidden template
    let task = taskTemplate.cloneNode(true);
    task.style.display = "block";
    task.id = `task-list-${taskCount}`;
    taskCount++;

    // Change the task text
    task.querySelector("p").innerText = text;

    // Add delete button function
    let deleteBtn = task.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        task.remove();
        heading();
    });

    // Add checkbox strike-through effect
    let checkbox = task.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            task.querySelector("p").style.textDecoration = "line-through";
            task.querySelector("p").style.color = "gray";
        } else {
            task.querySelector("p").style.textDecoration = "none";
            task.querySelector("p").style.color = "black";
        }
    });

    // Add to top
    taskContainer.prepend(task);
    heading();

    // Clear input
    taskMessage.value = "";
});
