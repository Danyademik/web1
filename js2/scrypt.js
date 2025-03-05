function createConverter(multiplier, adder) {
    return function (temperature) {
        return temperature * multiplier + adder;
    };
}

// Створення конвертерів
const celsiusToFahrenheit = createConverter(9 / 5, 32);
const fahrenheitToCelsius = createConverter(5 / 9, -32 * (5 / 9));

function startTemperatureConversion() {
    let temperature;
    do {
        temperature = prompt("Введіть числове значення температури:").trim();
    } while (!temperature || isNaN(temperature));
    temperature = Number(temperature);

    let conversionType;
    do {
        conversionType = prompt("Введіть напрямок конвертації: 'C to F' або 'F to C'").trim();
    } while (conversionType !== "C to F" && conversionType !== "F to C");

    let result;
    if (conversionType === "C to F") {
        result = celsiusToFahrenheit(temperature);
        alert(`${temperature}°C = ${result.toFixed(2)}°F`);
        console.log(`${temperature}°C = ${result.toFixed(2)}°F`);
    } else {
        result = fahrenheitToCelsius(temperature);
        alert(`${temperature}°F = ${result.toFixed(2)}°C`);
        console.log(`${temperature}°F = ${result.toFixed(2)}°C`);
    }
}

startTemperatureConversion();
