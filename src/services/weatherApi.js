import { API_KEY, BASE_URL, IsapiKeyConfig } from "../configs/api.js";

function parseDailyForecast(forecastList) {
    if (!Array.isArray(forecastList)) {
        return [];
    }

    return forecastList.filter((_, index) => index % 8 === 0);
}

export async function fetchForecastByCoords(lat, lon) {
    try {
        console.log("FORECAST API START");

        if (!IsapiKeyConfig) {
            throw new Error("API key is not configured");
        }

        const url =
            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=th`;

        console.log("FORECAST URL:", url);

        const response = await fetch(url);

        console.log("FORECAST STATUS:", response.status);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Cannot fetch forecast data");
        }

        console.log("FORECAST API SUCCESS");

        return parseDailyForecast(data.list);
    } catch (error) {
        console.error("fetchForecastByCoords error:", error.message);
        return [];
    }
}

export async function fetchWeatherByCoords(lat, lon) {
    try {
        console.log("CURRENT API START");

        if (!IsapiKeyConfig) {
            throw new Error("API key is not configured");
        }

        const url =
            `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=th`;

        console.log("CURRENT URL:", url);

        const currentResponse = await fetch(url);

        console.log("CURRENT STATUS:", currentResponse.status);

        const currentData = await currentResponse.json();

        if (!currentResponse.ok) {
            throw new Error(currentData.message || "Cannot fetch current weather data");
        }

        console.log("CURRENT API SUCCESS");

        const forecast = await fetchForecastByCoords(lat, lon);

        console.log("ALL API SUCCESS");

        return {
            current: currentData,
            forecast,
        };
    } catch (error) {
        console.error("fetchWeatherByCoords error:", error.message);

        return {
            current: null,
            forecast: [],
        };
    }
}