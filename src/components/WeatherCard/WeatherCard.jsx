import { useEffect, useState } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';
import { Modal } from 'components/Modal/Modal';
import FutureWeather from 'components/FutureWeather/FutureWeather';
import {
  Button,
  Wrapper,
} from 'components/CurrentWeather/CurrentWeather.styled';

const WeatherCard = ({ handleClick, city }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (!city) {
      return;
    }

    getCurrentWeather(city).then(resp => {
      setName(resp.name);
      setIcon(resp.weather[0].icon);
      setMain(resp.weather[0].description);
      setTemp(Number(resp.main.temp));
      setHumidity(resp.main.humidity);
      setWind(resp.wind.speed);
    });
  }, [city]);

  return (
    <Wrapper onClick={handleClick}>
      <h2>{name}</h2>
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
      <button type="button" onClick={openModal}>
        Show more details
      </button>
      {isOpenModal && (
        <Modal>
          <Button type="button" onClick={closeModal}>
            Go back
          </Button>
          <FutureWeather city={city} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default WeatherCard;
