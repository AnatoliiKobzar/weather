import axios from 'axios';

const API_KEY = 'd34694c3874a454f7481585be78e8c28';

export async function getCurrentWeather(city) {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return weather.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getWeatherIn5Days(city) {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return weather.data;
  } catch (error) {
    console.error(error);
  }
}
