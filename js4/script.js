
// Вибір елементів
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
        });

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        const editButton = document.createElement("button");
        editButton.textContent = "Редагувати";
        editButton.classList.add("edit");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.classList.add("delete");

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Будь ласка, введіть завдання!");
    }
});

taskList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete")) {
        const li = target.closest("li");
        taskList.removeChild(li);
    }

    if (target.classList.contains("edit")) {
        const li = target.closest("li");
        const taskSpan = li.querySelector(".task-text");
        const newText = prompt("Редагувати завдання:", taskSpan.textContent);

        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
        }
    }
});