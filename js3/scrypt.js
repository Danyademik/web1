
// Клас Task
class Task {
    constructor(title, description) {
        this._title = title;
        this._description = description;
        this._isCompleted = false;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (newTitle) {
            this._title = newTitle;
        }
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        if (newDescription) {
            this._description = newDescription;
        }
    }

    get isCompleted() {
        return this._isCompleted;
    }

    complete() {
        this._isCompleted = true;
        console.log(`Завдання "${this._title}" позначено як виконане.`);
    }

    display() {
        const status = this._isCompleted ? "Виконано" : "Не виконано";
        console.log(`Завдання: ${this._title}, Опис: ${this._description}, Статус: ${status}`);
        alert(`Завдання: ${this._title}, Опис: ${this._description}, Статус: ${status}`);
    }
}

// Клас UrgentTask
class UrgentTask extends Task {
    constructor(title, description, deadline) {
        super(title, description);
        this._deadline = deadline;
    }

    display() {
        const status = this._isCompleted ? "Виконано" : "Не виконано";
        console.log(`Термінове завдання: ${this._title}, Опис: ${this._description}, Дедлайн: ${this._deadline}, Статус: ${status}`);
        alert(`Термінове завдання: ${this._title}, Опис: ${this._description}, Дедлайн: ${this._deadline}, Статус: ${status}`);
    }
}

// Клас TaskList
class TaskList {
    constructor() {
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
        console.log(`Завдання "${task.title}" додано до списку.`);
    }

    displayAllTasks() {
        if (this._tasks.length === 0) {
            console.log("Список завдань порожній.");
            alert("Список завдань порожній.");
            return;
        }

        console.log("Список завдань:");
        this._tasks.forEach((task, index) => {
            console.log(`Завдання ${index + 1}:`);
            task.display();
        });
    }

    completeTask(index) {
        if (index >= 0 && index < this._tasks.length) {
            this._tasks[index].complete();
        } else {
            alert("Невірний індекс завдання.");
        }
    }

    deleteTask(index) {
        if (index >= 0 && index < this._tasks.length) {
            const deletedTask = this._tasks.splice(index, 1)[0];
            console.log(`Завдання "${deletedTask.title}" видалено.`);
        } else {
            alert("Невірний індекс завдання.");
        }
    }

    editTask(index, newTitle, newDescription) {
        if (index >= 0 && index < this._tasks.length) {
            const task = this._tasks[index];
            task.title = newTitle;
            task.description = newDescription;
            console.log(`Завдання "${task.title}" оновлено.`);
        } else {
            alert("Невірний індекс завдання.");
        }
    }
}

//створення звичайного завдання
function createTask() {
    const title = prompt("Введіть назву завдання:");
    const description = prompt("Введіть опис завдання:");

    if (!title || !description) {
        alert("Назва та опис завдання не можуть бути порожніми.");
        return null;
    }

    return new Task(title, description);
}

//створення термінового завдання
function createUrgentTask() {
    const title = prompt("Введіть назву термінового завдання:");
    const description = prompt("Введіть опис термінового завдання:");
    const deadline = prompt("Введіть дедлайн для термінового завдання:");

    if (!title || !description || !deadline) {
        alert("Назва, опис та дедлайн не можуть бути порожніми.");
        return null;
    }

    return new UrgentTask(title, description, deadline);
}

//функція для роботи зі списком завдань
function main() {
    const taskList = new TaskList();

    while (true) {
        const choice = prompt(
            "Виберіть опцію:\n" +
            "1. Додати звичайне завдання\n" +
            "2. Додати термінове завдання\n" +
            "3. Показати всі завдання\n" +
            "4. Позначити завдання як виконане\n" +
            "5. Видалити завдання\n" +
            "6. Редагувати завдання\n" +
            "7. Вийти"
        );

        if (choice === "1") {
            const task = createTask();
            if (task) {
                taskList.addTask(task);
            }
        } else if (choice === "2") {
            const urgentTask = createUrgentTask();
            if (urgentTask) {
                taskList.addTask(urgentTask);
            }
        } else if (choice === "3") {
            taskList.displayAllTasks();
        } else if (choice === "4") {
            const index = parseInt(prompt("Введіть номер завдання, яке потрібно позначити як виконане:")) - 1;
            taskList.completeTask(index);
        } else if (choice === "5") {
            const index = parseInt(prompt("Введіть номер завдання, яке потрібно видалити:")) - 1;
            taskList.deleteTask(index);
        } else if (choice === "6") {
            const index = parseInt(prompt("Введіть номер завдання, яке потрібно редагувати:")) - 1;
            const newTitle = prompt("Введіть нову назву завдання:");
            const newDescription = prompt("Введіть новий опис завдання:");
            taskList.editTask(index, newTitle, newDescription);
        } else if (choice === "7") {
            break;
        } else {
            alert("Невірний вибір. Спробуйте ще раз.");
        }
    }
}

main();