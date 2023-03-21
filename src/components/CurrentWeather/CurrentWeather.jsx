import { useEffect, useState } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';

const Weather = ({ changeCurrentCity }) => {
  const [city, setCity] = useState(null);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');

  useEffect(() => {
    if (!city) {
      return;
    }

    changeCurrentCity(city);

    getCurrentWeather(city).then(resp => {
      setName(resp.name);
      setIcon(resp.weather[0].icon);
      setMain(resp.weather[0].description);
      setTemp(Number(resp.main.temp));
    });
  }, [changeCurrentCity, city]);

  const handelCitySearch = event => {
    event.preventDefault();
    setCity(event.target.city.value);
  };

  return (
    <div>
      <form onSubmit={handelCitySearch}>
        <input type="text" name="city" placeholder="Enter your city" />
        <button type="submit">Search</button>
      </form>
      {city && (
        <div>
          <h2>{name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${icon}`}
          />
          <p>{main.charAt(0).toUpperCase() + main.slice(1)}</p>
          <p>Temp: {Math.round(temp)}&#8451;</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
