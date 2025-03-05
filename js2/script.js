function createSurvey() {
    let name;
    do {
        name = prompt("Введіть ваше ім'я:").trim();
    } while (!name || !isNaN(name));
    
    let age;
    do {
        age = prompt("Введіть ваш вік:").trim();
    } while (!age || isNaN(age) || Number(age) <= 0);
    age = Number(age);
    
    let city;
    do {
        city = prompt("Введіть ваше місто:").trim();
    } while (!city || !isNaN(city));
    
    let isAdult = age >= 18;
    
    return {
        name: name,
        age: age,
        city: city,
        isAdult: isAdult
    };
}

function displaySurvey(surveyData) {
    let message = `Ім'я: ${surveyData.name}\nВік: ${surveyData.age}\nМісто: ${surveyData.city}\nПовнолітній: ${surveyData.isAdult ? "Так" : "Ні"}`;
    
    console.log(message);
    alert(message);
}

function startSurvey() {
    let surveyData = createSurvey();
    displaySurvey(surveyData);
}
