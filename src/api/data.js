const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getDataForCity = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=no`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    return await response.json();
  } catch (error) {
    console.error("Error fetching city weather:", error);
    return null;
  }
};
