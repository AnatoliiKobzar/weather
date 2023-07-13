import { useEffect, useState } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';
import { Modal } from 'components/Modal/Modal';
import FutureWeather from 'components/FutureWeather/FutureWeather';
import {
  Button,
  Wrapper,
} from 'components/CurrentWeather/CurrentWeather.styled';
import { BtnMoreDetails, CityName } from './WeatherCard.styled';
import Loader from 'components/Loader/Loader';

const WeatherCard = ({ handleClick, city }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!city) {
      return;
    }
    setIsLoading(true);
    getCurrentWeather(city)
      .then(resp => {
        if (!resp) {
          return;
        }
        setName(resp.name);
        setIcon(resp.weather[0].icon);
        setMain(resp.weather[0].description);
        setTemp(Number(resp.main.temp));
        setHumidity(resp.main.humidity);
        setWind(resp.wind.speed);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  return (
    <Wrapper onClick={handleClick}>
      {isLoading ? (
        <Loader />
      ) : name ? (
        <>
          <CityName>{name}</CityName>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            width="100"
            height="100"
            alt={`${icon}`}
          />
          <p>{main.charAt(0).toUpperCase() + main.slice(1)}</p>
          <p>Temp: {Math.round(temp)}&#8451;</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind speed: {wind}m/c</p>
          <BtnMoreDetails type="button" onClick={openModal}>
            Show more details
          </BtnMoreDetails>
          {isOpenModal && (
            <Modal>
              <Button type="button" onClick={closeModal}>
                Go back
              </Button>
              <FutureWeather city={city} />
            </Modal>
          )}
        </>
      ) : (
        <h2>Try again!</h2>
      )}
    </Wrapper>
  );
};

export default WeatherCard;
