import { fetchWeatherByCoords } from "./weatherApi.js";

console.log("TEST FILE STARTED");

async function main() {
    try {
        console.log("CALLING API...");

        const result = await fetchWeatherByCoords(17.4138, 102.7872);

        console.log("API RESULT RECEIVED");

        console.log("CURRENT WEATHER:");
        console.log(JSON.stringify(result.current, null, 2));

        console.log("FORECAST:");
        console.log(JSON.stringify(result.forecast, null, 2));
    } catch (error) {
        console.error("TEST ERROR NAME:", error.name);
        console.error("TEST ERROR MESSAGE:", error.message);
        console.error("TEST ERROR STACK:", error.stack);
    }
}

main();