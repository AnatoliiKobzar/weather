import { useEffect, useState } from 'react';
import { getWeatherIn5Days } from 'services/weatherAPI';

const FutureWeather = ({ city }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (!city) {
      return;
    }
    getWeatherIn5Days(city).then(resp => {
      setDate(resp.list);
      setName(resp.city.name);
    });
  }, [city]);

  if (!date) {
    return;
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>Weather in 5 days</p>
      <ul>
        {date.map(item => (
          <li key={item.dt}>
            <p>{item.dt_txt}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={`${item.weather[0].icon}`}
            />
            <p>
              {item.weather[0].description.charAt(0).toUpperCase() +
                item.weather[0].description.slice(1)}
            </p>
            <p>Temp: {Math.round(Number(item.main.temp))}&#8451;</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FutureWeather;
