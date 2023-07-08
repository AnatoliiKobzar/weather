import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Wrapper } from 'components/CurrentWeather/CurrentWeather.styled';
import WeatherCard from 'components/WeatherCard/WeatherCard';

const Capital = ({ country, capital }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCity, setCurrentCity] = useState('');

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
      setCurrentCity(capital);
      setTimeout(() => {
        setIsFlipped(false);
      }, 7000);
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Wrapper onClick={handleClick}>
        <h2>{capital}</h2>
        <p>{country}</p>
      </Wrapper>

      <WeatherCard handleClick={handleClick} city={currentCity} />
    </ReactCardFlip>
  );
};

export default Capital;
