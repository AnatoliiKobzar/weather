import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useEffect } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';
import { Wrapper } from 'components/CurrentWeather/CurrentWeather.styled';

const Capital = ({ country, capital }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [currentCity, setCurrentCity] = useState('');

  const handleClick = e => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
    setCurrentCity(capital);
  };

  useEffect(() => {
    if (!currentCity) {
      return;
    }

    getCurrentWeather(currentCity).then(resp => {
      setName(resp.name);
      setIcon(resp.weather[0].icon);
      setMain(resp.weather[0].description);
      setTemp(Number(resp.main.temp));
      setHumidity(resp.main.humidity);
      setWind(resp.wind.speed);
    });
  }, [currentCity]);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Wrapper onClick={handleClick}>
        <h2>{capital}</h2>
        <p>{country}</p>
      </Wrapper>

      <Wrapper onClick={handleClick}>
        <h2>{name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${icon}`}
        />
        <p>{main.charAt(0).toUpperCase() + main.slice(1)}</p>
        <p>Temp: {Math.round(temp)}&#8451;</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind speed: {wind}m/c</p>
      </Wrapper>
    </ReactCardFlip>
  );
};

export default Capital;
