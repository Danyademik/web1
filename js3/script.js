
class User {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    display() {
        console.log(`Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`);
        alert(`Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`);
    }
}

// наслідування
class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession);
        this.role = role;
    }

    display() {
        super.display();
        console.log(`Роль адміністратора: ${this.role}`);
        alert(`Роль адміністратора: ${this.role}`);
    }
}

function createUser() {
    let name = prompt("Введіть ім'я користувача:");
    let age = parseInt(prompt("Введіть вік користувача:"));
    let profession = prompt("Введіть професію користувача:");

    if (isNaN(age) || age <= 0) {
        alert("Вік повинен бути числом більше 0.");
        return;
    }

    const user = new User(name, age, profession);
    user.display();
}

function createAdmin() {
    let name = prompt("Введіть ім'я адміністратора:");
    let age = parseInt(prompt("Введіть вік адміністратора:"));
    let profession = prompt("Введіть професію адміністратора:");
    let role = prompt("Введіть роль адміністратора:");

    if (isNaN(age) || age <= 0) {
        alert("Вік повинен бути числом більше 0.");
        return;
    }

    const admin = new Admin(name, age, profession, role);
    admin.display();
}

createUser();
createAdmin();