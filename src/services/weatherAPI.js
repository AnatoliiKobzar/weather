import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'd34694c3874a454f7481585be78e8c28';

export async function getCurrentWeather(city) {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return weather.data;
  } catch (error) {
    if (error.response.status === 404) {
      toast.warn(`City "${city}" not found!`, {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
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
