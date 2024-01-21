const form  = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable","true");
    newTask.innerText = value;

    task.addEventListener("dragstart", () => {
        task.classlist.add("is-dragging");

    });

    todoLane.appendChild(newTask);
    input.value = "";
});