import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useEffect } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';
import { Wrapper } from 'components/CurrentWeather/CurrentWeather.styled';
import { Modal } from 'components/Modal/Modal';
import FutureWeather from 'components/FutureWeather/FutureWeather';
import { Button } from './Capital.styled';

const Capital = ({ country, capital }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
      setCurrentCity(capital);
    }
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
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
        <button type="button" onClick={openModal}>
          Show more details
        </button>
        {isOpenModal && (
          <Modal>
            <Button type="button" onClick={closeModal}>
              Go back
            </Button>
            <FutureWeather city={currentCity} />
          </Modal>
        )}
      </Wrapper>
    </ReactCardFlip>
  );
};

export default Capital;
