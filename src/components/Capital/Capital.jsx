import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Wrapper } from 'components/CurrentWeather/CurrentWeather.styled';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import { CapitalPhoto, ListItem, PhotoWrap } from './Capital.styled';
import { CityName } from 'components/WeatherCard/WeatherCard.styled';

const Capital = ({ country, capital, photo }) => {
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
    <ListItem>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Wrapper>
          <CityName>{capital}</CityName>
          <p>{country}</p>
          <PhotoWrap>
            <CapitalPhoto
              src={photo}
              loading="lazy"
              alt={capital}
              onClick={handleClick}
            />
          </PhotoWrap>
        </Wrapper>

        <WeatherCard handleClick={handleClick} city={currentCity} />
      </ReactCardFlip>
    </ListItem>
  );
};

export default Capital;
