document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Введіть ваше ім'я:");
    let age = parseInt(prompt("Введіть ваш вік:"));
    let height = parseFloat(prompt("Введіть ваш зріст (у метрах):"));
    let isStudent = confirm("Ви студент? (OK - так, Отмена - ні)");
    let hobbies = prompt("Введіть ваші хобі через кому:").split(",");
    let imageUrl = prompt("Вставте URL вашого зображення:");

    document.getElementById("name").textContent = name || "Не вказано";
    document.getElementById("age").textContent = age || "Не вказано";
    document.getElementById("height").textContent = height ? height + " м" : "Не вказано";
    document.getElementById("isStudent").textContent = isStudent ? "Так" : "Ні";
    document.getElementById("hobbies").textContent = hobbies.length > 0 ? hobbies.join(", ") : "Не вказано";
    
    let profileImage = document.getElementById("profileImage");
    if (imageUrl) {
        profileImage.src = imageUrl;
    } else {
        profileImage.alt = "Зображення не завантажено";
    }
});