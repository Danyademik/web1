"use strict";

// Вибір елементів
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Додавання завдання
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText) {
        // Створення нового елемента <li>
        const li = document.createElement("li");

        // Чекбокс для відмітки завдання
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
        });

        // Текст завдання
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        // Кнопки редагування та видалення
        const editButton = document.createElement("button");
        editButton.textContent = "Редагувати";
        editButton.classList.add("edit");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.classList.add("delete");

        // Додавання елементів до <li>
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Додавання <li> до списку
        taskList.appendChild(li);

        // Очищення поля введення
        taskInput.value = "";
    } else {
        alert("Будь ласка, введіть завдання!");
    }
});

// Видалення та редагування завдань (делегування подій)
taskList.addEventListener("click", function (event) {
    const target = event.target;

    // Видалення завдання
    if (target.classList.contains("delete")) {
        const li = target.closest("li");
        taskList.removeChild(li);
    }

    // Редагування завдання
    if (target.classList.contains("edit")) {
        const li = target.closest("li");
        const taskSpan = li.querySelector(".task-text");
        const newText = prompt("Редагувати завдання:", taskSpan.textContent);

        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
        }
    }
});